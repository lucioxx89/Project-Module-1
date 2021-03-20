class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.car = options.car;
    this.width = options.width;
    this.height = options.height;

    this.obstacle = new Obstacle(options.ctx);
    this.obstacles = [
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
    ];
  }

  drawBackground() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(50, 5, this.width, this.height);
  }

  clean() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  update() {
    this.clean();
    this.car.draw();

    // this.obstacle.draw();
    this.obstacles.forEach((obs) => {
      obs.draw();
    });

    window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControlsToKeys();
    this.obstacle.start();
    this.obstacles.forEach((obs) => {
      obs.start();
    });
    window.requestAnimationFrame(this.update.bind(this));
  }

  assignControlsToKeys() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft": //37: left
          console.log("left");
          this.car.moveLeft();

          break;
        case "ArrowRight": //39: right
          console.log("right");
          this.car.moveRight();
          // console.log("right");
          break;
        default:
          break;
      }
    });
  }
}
