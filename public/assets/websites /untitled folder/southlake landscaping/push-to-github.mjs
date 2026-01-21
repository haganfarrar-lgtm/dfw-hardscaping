import fs from 'fs';
import path from 'path';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const dir = process.cwd();
const url = 'https://github.com/haganfarrar-lgtm/South-Lake-Landscaping.git';

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      if (!file.startsWith('.') || file === '.gitignore') {
        arrayOfFiles.push(fullPath);
      }
    }
  }
  return arrayOfFiles;
}

async function main() {
  console.log('🚀 Initializing git repository...');
  
  // Initialize repo
  await git.init({ fs, dir, defaultBranch: 'main' });
  
  console.log('📁 Adding files...');
  
  // Get all files
  const files = await getAllFiles(dir);
  
  // Add each file
  for (const file of files) {
    const relativePath = path.relative(dir, file);
    await git.add({ fs, dir, filepath: relativePath });
  }
  
  console.log(`  Added ${files.length} files`);
  
  console.log('💾 Creating commit...');
  
  // Commit
  await git.commit({
    fs,
    dir,
    message: 'Initial commit: Southlake Landscaping Next.js website',
    author: {
      name: 'Hagan Farrar',
      email: 'hagan@example.com'
    }
  });
  
  console.log('🔗 Adding remote...');
  
  // Add remote
  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url
  });
  
  console.log('⬆️  Pushing to GitHub...');
  
  // Push
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true
  });
  
  console.log('✅ Successfully pushed to GitHub!');
  console.log(`🔗 https://github.com/haganfarrar-lgtm/South-Lake-Landscaping`);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  if (err.message.includes('401') || err.message.includes('auth')) {
    console.log('\n💡 You need to authenticate with GitHub.');
    console.log('   Please create a Personal Access Token at:');
    console.log('   https://github.com/settings/tokens/new');
    console.log('   Then run: GITHUB_TOKEN=your_token node push-to-github.mjs');
  }
  process.exit(1);
});
