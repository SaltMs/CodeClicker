class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'matrix-background';
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}|=+-*/&%$#@!';
        this.drops = [];
        this.fontSize = 15;
        this.init();

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.init();
    }

    init() {
        this.drops = Array(this.columns).fill(1);
    }

    draw() {
        // Semi-transparent black to create fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#0F0'; // Bright green color
        this.ctx.font = `${this.fontSize}px monospace`;

        for(let i = 0; i < this.drops.length; i++) {
            // Random character
            const text = this.characters[Math.floor(Math.random() * this.characters.length)];
            
            // x = i * fontSize, y = value of drops[i] * fontSize
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

            // Randomly reset the end of the column if it's at least 100 pixels high
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            // Increment y coordinate
            this.drops[i]++;
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Create and start the animation when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const matrix = new MatrixRain();
    matrix.animate();
});
