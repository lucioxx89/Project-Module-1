class Game {
    constructor (options) {
        this.ctx = options.ctx;
        this.car = options.car;
        this.width = options.width;
        this.height = options.height;

    }

    drawBackground(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(50, 5, this.width, this.height);
    }

    clean() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update() {
        this.clean()
        
        this.car.draw()
        window.requestAnimationFrame(this.update.bind(this))
    }

    start() {
        window.requestAnimationFrame(this.update.bind(this))
    }
}
