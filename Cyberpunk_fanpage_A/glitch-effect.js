const canvas = document.getElementById('glitch-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const glitchColors = ['#D3D3D3','#808080','#FFFFFF','#A9A9A9','#000000'];

function glitchEffect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const glitchHeight = 0.5;
    
    for (let i = 0; i < canvas.height; i += glitchHeight) {
        const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        const glitchWidth = Math.random() * canvas.width * 0.05;
        const xPos = Math.random() * canvas.width;

        ctx.fillStyle = color;
        ctx.fillRect(xPos, i, glitchWidth, glitchHeight);
    }
}

setInterval(glitchEffect, 100);
