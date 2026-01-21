const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path');

const width = 200;
const height = 200;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Colors
const navy = '#0c4a6e';
const gold = '#f59e0b';
const green = '#15803d'; // Adding a landscaping green
const white = '#ffffff';

ctx.clearRect(0, 0, width, height);

// Draw Circle Background
const centerX = width / 2;
const centerY = height / 2;
const radius = 95;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fillStyle = navy;
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = gold;
ctx.stroke();

// Draw Rolling Hills (Grass)
ctx.beginPath();
ctx.moveTo(centerX - radius + 5, centerY + 20);
ctx.quadraticCurveTo(centerX - 40, centerY - 10, centerX, centerY + 20);
ctx.quadraticCurveTo(centerX + 40, centerY + 50, centerX + radius - 5, centerY + 10);
ctx.lineTo(centerX + radius - 15, centerY + 60); // fill bottom
ctx.quadraticCurveTo(centerX, centerY + 90, centerX - radius + 15, centerY + 60);
ctx.closePath();
ctx.fillStyle = green;
ctx.fill();

// Draw Classic Oak Tree
ctx.fillStyle = '#A0522D'; // Sienna/Brown for trunk
ctx.beginPath();
// Trunk
ctx.moveTo(centerX - 10, centerY + 40);
ctx.quadraticCurveTo(centerX - 15, centerY + 20, centerX - 10, centerY - 10);
ctx.lineTo(centerX + 10, centerY - 10);
ctx.quadraticCurveTo(centerX + 15, centerY + 20, centerX + 10, centerY + 40);
ctx.fill();

// Foliage (Cloud style)
ctx.fillStyle = gold;
function drawCloud(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

drawCloud(centerX, centerY - 45, 35);      // Top
drawCloud(centerX - 30, centerY - 25, 28); // Left
drawCloud(centerX + 30, centerY - 25, 28); // Right
drawCloud(centerX - 20, centerY - 5, 25);  // Bottom Left
drawCloud(centerX + 20, centerY - 5, 25);  // Bottom Right

// Add a sun hint
ctx.beginPath();
ctx.arc(centerX + 50, centerY - 50, 15, 0, Math.PI * 2);
ctx.fillStyle = '#FDB813'; // Sun yellow
ctx.fill();

// Save Icon
const outputDir = path.join(__dirname, 'public/logo');
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'colleyville-icon.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

// Also save as colleyville-logo.png
const logoPath = path.join(outputDir, 'colleyville-logo.png');
fs.writeFileSync(logoPath, buffer);

console.log('Generated new landscaping logo at: ' + outputPath);

