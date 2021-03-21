class Obstacle {
  constructor(ctx) {
    // inicializamos x
    this.ctx = ctx;
    this.x = this.randomObstaclePositionX(); //150; // entre 0 y max width
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.speedY = this.randomObstacleSpeed(); // no speed before
    this.speedX = 0;
    this.intervalId = undefined;
  }

  moveObstacle() {
    this.y = this.y + this.speedY; //10
    if (this.y > 750) {
      this.y = this.y % 750;
    } else if (this.y < 0) {
      this.y = (this.y + 750) % 750;
    }
  }

  start() {
    this.intervalId = setInterval(this.moveObstacle.bind(this), 300);
  }

  drawObstacle() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  randomObstaclePositionX() {
    return Math.floor(Math.random() * (1170 - 10) + 10);
  }

  randomObstacleSpeed() {
    return Math.floor(Math.random() * (100 - 30) + 30);
  }
}
