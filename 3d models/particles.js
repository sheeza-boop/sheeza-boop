const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Particle class
class Particle {
    constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    // Draw particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Update particle position
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Reverse direction upon hitting canvas edges
        if (this.x > canvas.width || this.x < 0) this.velocityX = -this.velocityX;
        if (this.y > canvas.height || this.y < 0) this.velocityY = -this.velocityY;

        // Draw particle after updating position
        this.draw();
    }
}

// Create particles
function initParticles() {
    particlesArray = [];
    const numberOfParticles = 100;
    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const velocityX = (Math.random() - 0.5) * 2;
        const velocityY = (Math.random() - 0.5) * 2;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesArray.push(new Particle(x, y, size, color, velocityX, velocityY));
    }
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => particle.update());
    requestAnimationFrame(animateParticles);
}

// Adjust canvas size when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Initialize and animate particles
initParticles();
animateParticles();
