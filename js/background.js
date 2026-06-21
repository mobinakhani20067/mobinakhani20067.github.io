(function() {
if (document.querySelector('.particle-canvas')) return;

const canvas = document.createElement('canvas');
canvas.classList.add('particle-canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let time = 0;

class Particle {
    constructor(x, y, radius, color, speedX, speedY, alpha) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.alpha = alpha;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.min(50, Math.floor(width * height / 12000));
    const colors = ['#ffd966', '#f5b042', '#c9e0a8'];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(
            Math.random() * width,
            Math.random() * height,
            Math.random() * 2.5 + 1,
            colors[Math.floor(Math.random() * colors.length)],
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.15,
            0.2 + Math.random() * 0.3
        ));
    }
}

function drawBackground() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        const yOffset = height * (0.5 + i * 0.3);
        ctx.moveTo(0, yOffset + Math.sin(0) * 18);
        for (let x = 0; x <= width; x += 30) {
            const y = yOffset + Math.sin(x * 0.004 + time * 0.002 + i) * 18;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255, 217, 102, 0.08)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
    
    for (let i = 0; i < 80; i++) {
        const x = (i * 173) % width;
        const y = (i * 257) % height;
        ctx.fillStyle = `rgba(255, 217, 102, ${0.1 + Math.sin(time * 0.001 + i) * 0.05})`;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    if (!ctx) return;
    time = performance.now();
    drawBackground();
    particles.forEach(p => { p.update(); p.draw(ctx); });
    requestAnimationFrame(animate);
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

window.addEventListener('resize', resize);
resize();
animate();
})();
