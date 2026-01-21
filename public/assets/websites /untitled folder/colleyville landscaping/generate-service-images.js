const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'public/images/services');
const services = fs.readdirSync(servicesDir);

const imageArrays = {};

services.forEach(serviceSlug => {
  const servicePath = path.join(servicesDir, serviceSlug);
  const stats = fs.statSync(servicePath);

  if (stats.isDirectory()) {
    const files = fs.readdirSync(servicePath)
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort();

    imageArrays[serviceSlug] = files.map(file =>
      `/images/services/${serviceSlug}/${file}`
    );
  }
});

console.log(JSON.stringify(imageArrays, null, 2));
