const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceRoot = '/Users/haganfarrar/Desktop/photos for website';
const destRoot = path.join(__dirname, 'public/images/services');

const mapping = {
  'brick work': 'brick-work',
  'concrete': 'concrete',
  'drainage': 'drainage',
  'flagstone': 'flagstone',
  'border edging': 'flower-bed-edging',
  'french drain': 'french-drain',
  'gutter drainage': 'gutter-drainage',
  'hardscaping': 'hardscaping',
  'irrigation': 'irrigation',
  'cleanup': 'landscape-cleanup',
  'landscape design': 'landscape-design',
  'leaf cleanup': 'leaf-cleanup',
  'mulch': 'mulch-installation',
  'outdoor lighting': 'outdoor-lighting',
  'paver installation': 'pavers', // Renaming to match slug
  'retaining wall': 'retaining-walls', // Renaming to match slug
  'river rock': 'river-rock',
  'sod installtion': 'sod-installation',
  'tree planting': 'tree-planting',
  'weed barriar': 'weed-barrier'
};

// Ensure destination root exists
if (!fs.existsSync(destRoot)) {
  fs.mkdirSync(destRoot, { recursive: true });
}

Object.entries(mapping).forEach(([srcFolder, destFolder]) => {
  const srcPath = path.join(sourceRoot, srcFolder);
  const destPath = path.join(destRoot, destFolder);

  if (fs.existsSync(srcPath)) {
    console.log(`Processing: ${srcFolder} -> ${destFolder}`);

    // Remove existing destination folder if it exists
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    
    // Create destination folder
    fs.mkdirSync(destPath, { recursive: true });

    // Copy files
    const files = fs.readdirSync(srcPath);
    let count = 0;
    files.forEach(file => {
      // Skip hidden files like .DS_Store
      if (file.startsWith('.')) return;
      
      const srcFile = path.join(srcPath, file);
      const destFile = path.join(destPath, file);
      
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, destFile);
        count++;
      }
    });
    console.log(`  Copied ${count} files.`);
  } else {
    console.warn(`  WARNING: Source folder not found: ${srcPath}`);
  }
});

console.log('Image replacement complete.');

