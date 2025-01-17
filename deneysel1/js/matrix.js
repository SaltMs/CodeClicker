class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'matrix-background';
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 15;
        this.characters = '01';
        
        // Retina ekranlar için DPI ayarı
        const dpr = window.devicePixelRatio || 1;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.ctx.scale(dpr, dpr);

        // Sütun sayısını hesapla
        this.columns = Math.floor(window.innerWidth / this.fontSize);
        this.drops = Array(this.columns).fill(1);

        this.init();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.ctx.scale(dpr, dpr);
        this.columns = Math.floor(window.innerWidth / this.fontSize);
        this.init();
    }

    init() {
        // Her sütun için bir damla oluştur
        this.drops = Array(this.columns).fill(1);
    }

    draw() {
        // Semi-transparent black to create fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Yeşil rengi biraz daha matrix tarzı yapalım
        this.ctx.fillStyle = '#00FF41'; // Daha parlak bir matrix yeşili
        this.ctx.font = `${this.fontSize}px monospace`;

        for(let i = 0; i < this.drops.length; i++) {
            // Rastgele 0 veya 1
            const text = this.characters[Math.floor(Math.random() * this.characters.length)];
            
            // Bazı karakterleri daha parlak yapalım
            if(Math.random() > 0.98) {
                this.ctx.fillStyle = '#FFFFFF'; // Ara sıra beyaz karakterler
            } else {
                this.ctx.fillStyle = '#00FF41'; // Normal yeşil
            }
            
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

            // Sütunların düşüş hızını biraz artıralım
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.95) {
                this.drops[i] = 0;
            }

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
