const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

ctx.beginPath();
ctx.moveTo(0, height / 2);

for (let i = 0; i <= width; i++) {
  const y = Math.sin(i * Math.PI / 180) * 50 + height / 2;
  ctx.lineTo(i, y);
}

ctx.lineTo(width, height);
ctx.lineTo(0, height);
ctx.closePath();

const gradient = ctx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, 'rgba(44, 47, 51, 0.6)');
gradient.addColorStop(1, 'rgba(35, 39, 42, 1)');

ctx.fillStyle = gradient;
ctx.fill();
