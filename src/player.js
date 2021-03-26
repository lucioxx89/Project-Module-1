class Mouse {
  constructor(x, y, ctx, width, height, speedX) {
    (this.ctx = ctx),
      (this.x = x),
      (this.y = y),
      (this.width = width),
      (this.height = height),
      (this.speedX = speedX);
  }

  draw() {
    //draw mouse
    const mouseImg = new Image();
    mouseImg.src = "./styles/Images/mouse.png";
    this.ctx.drawImage(mouseImg, this.x, this.y, this.width, this.height);

    // this.ctx.fillStyle = "grey";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height, this.speedX);
  }

  moveLeft() {
    this.x = this.x - this.speedX;
  }

  moveRight() {
    this.x = this.x + this.speedX;
  }
}
