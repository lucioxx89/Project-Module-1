class Cheese {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.randomCheesePositionX(); //150; // entre 0 y max width
    this.y = 0;
    this.width = 60;
    this.height = 70;
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

  startMovingCheese() {
    this.intervalId = setInterval(this.moveCheese.bind(this), 300);
  }

  stopMovingCheese() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("stop cheese");
    }
  }
  // stop() {
  //   this.intervalId = clearInterval(this.moveCheese);
  // }

  drawCheese() {
    const cheeseImg = new Image();
    cheeseImg.src = "./styles/Images/cheese.png";
    this.ctx.drawImage(cheeseImg, this.x, this.y, this.width, this.height);

    // this.ctx.fillStyle = "yellow";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  randomCheesePositionX() {
    return Math.floor(Math.random() * (1170 - 10) + 10);
  }

  randomCheeseSpeed() {
    return Math.floor(Math.random() * (70 - 30) + 30);
  }

  collisionWithMouse(mouse) {
    return (
      this.x < mouse.x + mouse.width &&
      this.x + this.width > mouse.x &&
      this.y < mouse.y + mouse.height &&
      this.y + this.height > mouse.y
    );
  }
} //  cheese class
