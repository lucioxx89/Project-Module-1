class Game {
    constructor (options) {
        this.ctx = options.ctx;
        this.car = options.car;
        this.width = options.width;
        this.height = options.height;

    }

    drawBackground(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(50, 5, this.width, this.height);
    }

    clean() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update() {
        this.clean()
        
        this.car.draw()
        window.requestAnimationFrame(this.update.bind(this))


    }

    start() {
        window.requestAnimationFrame(this.update.bind(this))
        this.assignControlsToKeys();


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





// assignControlsToKeys() {
//     document.addEventListener('keydown', (event) => {
//       switch (event.code) {
//         case 'ArrowUp':
//           this.snake.goUp();
//           break;
//         case 'ArrowDown':
//           this.snake.goDown();
//           break;
//         case 'ArrowLeft':
//           this.snake.goLeft();
//           break;
//         case 'ArrowRight':
//           this.snake.goRight();
//           break;
//         default:
//           break;
//       }
//     });
//   }