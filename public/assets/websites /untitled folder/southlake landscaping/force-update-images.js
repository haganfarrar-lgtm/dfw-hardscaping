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

// Services that don't have image folders yet - using fallbacks
const servicesWithoutFolders = {
  'planting': 'landscape-design', 
  'softscaping': 'landscape-design', 
  'stone-edging': 'flower-bed-edging', 
  'outdoor-masonry': 'hardscaping', 
  'fireplace': 'hardscaping', 
  'pergolas': 'hardscaping', 
  'fencing': 'hardscaping', 
  'custom-design': 'landscape-design'
};

// Function to update a service block
const updateServiceBlock = (slug, images) => {
  if (!images || images.length === 0) return;

  const imagesArray = JSON.stringify(images, null, 6).replace(/\n/g, '\n    ');
  const firstImage = images[0];

  // Regex to find the specific service block
  // We look for the slug, then capture the heroImage and images parts to replace them
  
  // This regex matches: slug: 'SLUG', [anything until] heroImage: 'OLD', [anything until] images: [OLD]
  // We need to be careful not to overshoot to the next service.
  // We use [^}]*? to stay within the object (mostly), or rely on the fact that keys are unique.
  
  const regex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?)heroImage:\\s*'[^']*'([\\s\\S]*?)images:\\s*\\[[\\s\\S]*?\\]`, 'g');
  
  servicesContent = servicesContent.replace(regex, (match, p1, p2) => {
    return `${p1}heroImage: '${firstImage}'${p2}images: ${imagesArray}`;
  });
};

// Process direct mappings
Object.keys(serviceImages).forEach(folder => {
  const slug = serviceMapping[folder] || folder;
  const images = serviceImages[folder];
  updateServiceBlock(slug, images);
});

// Process fallbacks
Object.keys(servicesWithoutFolders).forEach(slug => {
  const sourceFolder = servicesWithoutFolders[slug];
  const images = serviceImages[sourceFolder];
  updateServiceBlock(slug, images);
});

// Write back the updated file
fs.writeFileSync(servicesPath, servicesContent);

console.log('Services forcefully updated with images!');

