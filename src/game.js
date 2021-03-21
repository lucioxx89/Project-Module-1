class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.mouse = options.mouse;
    this.width = options.width;
    this.height = options.height;

    // this.obstacle = new Obstacle(options.ctx);
    this.obstacles = [
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
    ];

    this.cheese = [
      new Cheese(options.ctx),
      new Cheese(options.ctx),
      new Cheese(options.ctx),
    ];
  }

  drawAllCheese() {
    this.cheese.forEach((cheese) => {
      cheese.drawCheese();
    });
  }

  drawAllObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
    });
  }

  moveAllCheese() {
    this.cheese.forEach((cheese) => {
      cheese.start();
    });
  }

  moveAllObstacles() {
    this.obstacles.forEach((obst) => {
      obst.start();
    });
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

    this.mouse.draw();

    this.drawAllObstacles();

    this.drawAllCheese();

    this.obstacles.forEach((obs) => {
      if (obs.collisionWithMouse(this.mouse)) {
        printGameOver();
      }
    });

    // this.randomObstacles.forEach((obstacle) => {
    //   if (obstacle.collisionWithChihuahua(this.chihuahua)) {
    //     console.log("collision with obstacle");

    // this.moveAllObstacles();

    // this.obstacle.drawObstacle();

    window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControlsToKeys();

    this.moveAllObstacles();

    this.moveAllCheese();

    // this.obstacles.forEach((obs) => {
    //   obs.start();
    // });
    window.requestAnimationFrame(this.update.bind(this));
  }

  assignControlsToKeys() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft": //37: left
          console.log("left");
          this.mouse.moveLeft();

          break;
        case "ArrowRight": //39: right
          console.log("right");
          this.mouse.moveRight();
          break;
        default:
          break;
      }
    });
  }
}
