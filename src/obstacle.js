class Obstacle {
  constructor(ctx) {
    // inicializamos x
    this.ctx = ctx;
    this.x = 150; // entre 0 y max width
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.intervalId = undefined;
  }

  move() {
    this.y = this.y + 10;
  }

  start() {
    this.intervalId = setInterval(this.move.bind(this), 300);
  }

  draw() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// randomPositionX() {
//   Math.floor(Math.random() * 300);
// }
