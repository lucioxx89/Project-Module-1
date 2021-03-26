class Obstacle {
  constructor(ctx) {
    // inicializamos x
    this.ctx = ctx;
    this.x = this.randomObstaclePositionX(); //150; // entre 0 y max width
    this.y = 0;
    this.width = 50;
    this.height = 50;
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

  startMovingObstacle() {
    this.intervalId = setInterval(this.moveObstacle.bind(this), 300);
  }

  stopMovingObstacle() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("stop obstacle");
    }
  }

  drawObstacle() {
    const trapImg = new Image();
    trapImg.src = "./styles/Images/mouseTrap.png";
    this.ctx.drawImage(trapImg, this.x, this.y, this.width, this.height);
    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  randomObstaclePositionX() {
    return Math.floor(Math.random() * (1170 - 10) + 10);
  }

  randomObstacleSpeed() {
    return Math.floor(Math.random() * (100 - 30) + 30);
  }

  collisionWithMouse(mouse) {
    return (
      this.x < mouse.x + mouse.width &&
      this.x + this.width > mouse.x &&
      this.y < mouse.y + mouse.height &&
      this.y + this.height > mouse.y
    );
  }
}

// collison() {
//   if (this.mouse.x === this.obstacle.x + this.obstacle.width && this.mouse.x)
// }
// if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
//   object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
// // The objects are touching
// }
