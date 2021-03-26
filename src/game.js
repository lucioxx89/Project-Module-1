class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.mouse = options.mouse;
    this.width = options.width;
    this.height = options.height;
    this.cheeseCounter = 0; //options.cheeseCounter;

    // this.obstacle = new Obstacle(options.ctx);
    this.obstacles = [
      new Obstacle(options.ctx),
      new Obstacle(options.ctx),
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
      cheese.startMovingCheese();
    });
  }

  stopMovingAllCheese() {
    this.cheese.forEach((cheese) => {
      cheese.stopMovingCheese();
    });
  }

  moveAllObstacles() {
    this.obstacles.forEach((obst) => {
      obst.startMovingObstacle();
    });
  }

  stopMovingAllObstacle() {
    this.obstacles.forEach((obst) => {
      obst.stopMovingObstacle();
    });
  }

  drawBackground() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(50, 5, this.width, this.height);
  }

  clean() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  counter() {
    this.cheese.forEach((cheese) => {
      if (cheese.collisionWithMouse(this.mouse)) {
        this.cheeseCounter += 1;

        console.log(this.cheeseCounter);
      }
    });
  }

  endGame() {
    this.obstacles.forEach((obs) => {
      if (obs.collisionWithMouse(this.mouse)) {
        this.stopMovingAllCheese();
        this.stopMovingAllObstacle();
        printGameOver();
        this.clean();
      }
    });
  }

  // counter() {
  //   this.cheese.forEach((cheese) => {
  //     this.cheese + 1;
  //   });
  // }

  update() {
    this.clean();

    this.mouse.draw();

    this.drawAllObstacles();

    this.drawAllCheese();

    // PUT IT INSIDE THE FUNCTION END GAME

    // this.obstacles.forEach((obs) => {
    //   if (obs.collisionWithMouse(this.mouse)) {
    //     this.stopMovingAllCheese();
    //     this.stopMovingAllObstacle();
    //     printGameOver();
    //   }
    // });

    this.counter();
    document.getElementById("score").innerHTML = "Score: " + this.cheeseCounter;

    this.endGame();
    document.getElementById("final_score").innerHTML =
      "Final score: " + this.cheeseCounter;

    //CHEESE COUNTER , I PUT IT INSIDE THE FUNCTION COUNTER

    // this.cheese.forEach((cheese) => {
    //   if (cheese.collisionWithMouse(this.mouse)) {
    //     this.cheeseCounter += 1;

    //     console.log(this.cheeseCounter);
    //   }
    // });

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
