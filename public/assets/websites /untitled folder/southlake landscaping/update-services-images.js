const fs = require('fs');
const path = require('path');

// Read the service images JSON
const serviceImagesPath = path.join(__dirname, 'service-images.json');
const serviceImages = JSON.parse(fs.readFileSync(serviceImagesPath, 'utf8'));

// Read the services.ts file
const servicesPath = path.join(__dirname, 'data/services.ts');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Mapping between folder names and service slugs
const serviceMapping = {
  'landscape-design': 'landscape-design',
  'tree-planting': 'tree-planting',
  'sod-installation': 'sod-installation',
  'mulch-installation': 'mulch-installation',
  'river-rock': 'river-rock',
  'flower-bed-edging': 'flower-bed-edging',
  'hardscaping': 'hardscaping',
  'pavers': 'pavers',
  'concrete': 'concrete',
  'flagstone': 'flagstone',
  'brick-work': 'brick-work',
  'irrigation': 'irrigation',
  'drainage': 'drainage',
  'french-drain': 'french-drain',
  'outdoor-lighting': 'outdoor-lighting',
  'weed-barrier': 'weed-barrier',
  'gutter-drainage': 'gutter-drainage',
  'leaf-cleanup': 'leaf-cleanup',
  'landscape-cleanup': 'landscape-cleanup'
};

// Services that don't have image folders yet
const servicesWithoutFolders = {
  'planting': 'landscape-design', // Use landscape-design images
  'softscaping': 'landscape-design', // Use landscape-design images
  'stone-edging': 'flower-bed-edging', // Use flower-bed-edging images
  'outdoor-masonry': 'hardscaping', // Use hardscaping images
  'fireplace': 'hardscaping', // Use hardscaping images
  'pergolas': 'hardscaping', // Use hardscaping images
  'fencing': 'hardscaping', // Use hardscaping images
  'custom-design': 'landscape-design' // Use landscape-design images
};

// For each service that already has images property, skip
// For each service that needs images, add them

Object.keys(serviceImages).forEach(folder => {
  const slug = serviceMapping[folder] || folder;
  const images = serviceImages[folder];
  const imagesArray = JSON.stringify(images, null, 6).replace(/\n/g, '\n    ');

  // Find the service and add images if not already there
  const heroImagePattern = new RegExp(`slug: '${slug}',[\\s\\S]*?heroImage: '([^']*)'(?!,[\\s\\S]*?images:)`, 'g');

  servicesContent = servicesContent.replace(heroImagePattern, (match, heroImage) => {
    return match + `,\n    images: ${imagesArray}`;
  });
});

// Handle services without their own folders
Object.keys(servicesWithoutFolders).forEach(slug => {
  const sourceFolder = servicesWithoutFolders[slug];
  const images = serviceImages[sourceFolder];
  const imagesArray = JSON.stringify(images, null, 6).replace(/\n/g, '\n    ');

  const heroImagePattern = new RegExp(`slug: '${slug}',[\\s\\S]*?heroImage: '([^']*)'(?!,[\\s\\S]*?images:)`, 'g');

  servicesContent = servicesContent.replace(heroImagePattern, (match, heroImage) => {
    return match + `,\n    images: ${imagesArray}`;
  });
});

// Write back the updated file
fs.writeFileSync(servicesPath, servicesContent);

console.log('Services updated successfully!');
