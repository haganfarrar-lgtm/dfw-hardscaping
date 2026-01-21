import fs from 'fs';
import path from 'path';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const dir = process.cwd();
const url = 'https://github.com/haganfarrar-lgtm/South-Lake-Landscaping.git';

// Helper to get the token from env
const token = process.env.GITHUB_TOKEN;

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    // Skip node_modules and .git directory
    if (file === 'node_modules' || file === '.git' || file === '.DS_Store') continue;

    if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
    } else {
        arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

async function main() {
  if (!token) {
    console.error('❌ Error: GITHUB_TOKEN environment variable is required.');
    process.exit(1);
  }

  console.log('🚀 Initializing git repository...');
  
  // Initialize repo (safe to run if already initialized)
  await git.init({ fs, dir, defaultBranch: 'main' });
  
  console.log('📁 Adding files...');
  
  // Get all files
  const files = await getAllFiles(dir);
  
  // Add each file
  for (const file of files) {
    const relativePath = path.relative(dir, file);
    // Skip adding the script itself if you want, or add it.
    try {
        await git.add({ fs, dir, filepath: relativePath });
    } catch (e) {
        console.warn(`Warning: Could not add ${relativePath}: ${e.message}`);
    }
  }
  
  console.log(`  Added ${files.length} files`);
  
  console.log('💾 Creating commit...');
  
  // Commit
  try {
      await git.commit({
        fs,
        dir,
        message: 'Rebrand to Grapevine Landscaping',
        author: {
          name: 'Hagan Farrar',
          email: 'hagan@example.com' // Ideally get this from git config if possible, or use dummy
        }
      });
  } catch (e) {
      console.log('  (Nothing to commit or commit failed, continuing to push...)');
  }
  
  console.log('🔗 Configuring remote...');
  
  // Add or update remote
  // List remotes to see if origin exists
  const remotes = await git.listRemotes({ fs, dir });
  if (!remotes.find(r => r.remote === 'origin')) {
      await git.addRemote({
        fs,
        dir,
        remote: 'origin',
        url
      });
  }

  console.log('⬆️  Pushing to GitHub...');
  
  // Push with token authentication
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true, // Force push to overwrite remote history
    onAuth: () => ({ username: token }), // Use token as username for PAT
  });
  
  console.log('✅ Successfully pushed to GitHub!');
  console.log(`🔗 https://github.com/haganfarrar-lgtm/South-Lake-Landscaping`);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});

