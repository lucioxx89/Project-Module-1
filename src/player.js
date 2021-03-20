class Car {
    constructor(x, y, ctx,  width, height, speedX) {
        this.ctx = ctx,
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.speedX = speedX // speedX ?

    }

    draw() { //draw car
        
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(this.x, this.y, this.width, this.height, this.speedX);
        
    }

   
    moveLeft() {
        this.x = this.x - this.speedX;
    }
    
    moveRight() {
        this.x = this.x + this.speedX;
    }


}

// const player = new Player (20, 20)


 // moveLeft() {
    //     this.x = x - 1;
    // }
    
    // moveRight() {
    //     this.x = x + 1;
    // }