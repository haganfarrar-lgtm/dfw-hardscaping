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
const white = '#ffffff';

ctx.clearRect(0, 0, width, height);

// Draw Modern Hexagon Background
ctx.beginPath();
const radius = 90;
const centerX = width / 2;
const centerY = height / 2;

for (let i = 0; i < 6; i++) {
  const angle_deg = 60 * i - 30;
  const angle_rad = Math.PI / 180 * angle_deg;
  const x = centerX + radius * Math.cos(angle_rad);
  const y = centerY + radius * Math.sin(angle_rad);
  if (i === 0) ctx.moveTo(x, y);
  else ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = navy;
ctx.fill();

// Draw Gold Border
ctx.lineWidth = 5;
ctx.strokeStyle = gold;
ctx.stroke();

// Draw Abstract Tree (Minimalist)
ctx.fillStyle = white;
ctx.beginPath();
// Trunk
ctx.moveTo(centerX - 10, centerY + 60);
ctx.lineTo(centerX + 10, centerY + 60);
ctx.lineTo(centerX + 5, centerY);
ctx.lineTo(centerX - 5, centerY);
ctx.fill();

// Leaves (Geometric circles)
ctx.fillStyle = gold;
const leafRadius = 25;
ctx.beginPath();
ctx.arc(centerX, centerY - 20, leafRadius, 0, Math.PI * 2); // Top
ctx.arc(centerX - 25, centerY + 10, leafRadius, 0, Math.PI * 2); // Left
ctx.arc(centerX + 25, centerY + 10, leafRadius, 0, Math.PI * 2); // Right
ctx.fill();

// Add some Navy details inside leaves
ctx.fillStyle = navy;
ctx.beginPath();
ctx.arc(centerX, centerY - 20, 10, 0, Math.PI * 2);
ctx.fill();


// Save Icon
const outputDir = path.join(__dirname, 'public/logo');
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'colleyville-icon.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

// Also save as colleyville-logo.png for SEO schema consistency
const logoPath = path.join(outputDir, 'colleyville-logo.png');
fs.writeFileSync(logoPath, buffer);

console.log('Generated Colleyville logo at: ' + outputPath);

