class Cheese {
  constructor(ctx) {
    // inicializamos x
    this.ctx = ctx;
    this.x = this.randomCheesePositionX(); //150; // entre 0 y max width
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.speedY = this.randomCheeseSpeed(); // no speed before
    this.speedX = 0;
    this.intervalId = undefined;
  }

  moveCheese() {
    this.y = this.y + this.speedY; //10
    if (this.y > 750) {
      this.y = this.y % 750;
    } else if (this.y < 0) {
      this.y = (this.y + 750) % 750;
    }
  }

  start() {
    this.intervalId = setInterval(this.moveCheese.bind(this), 300);
  }

  drawCheese() {
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  randomCheesePositionX() {
    return Math.floor(Math.random() * (1170 - 10) + 10);
  }

  randomCheeseSpeed() {
    return Math.floor(Math.random() * (70 - 30) + 30);
  }
}
