class Car {
    constructor(x, y, ctx,  width, height) {
        this.ctx = ctx;
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height

    }

    draw() {
        
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }

}

// const player = new Player (20, 20)

