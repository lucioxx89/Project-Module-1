function printGameOver() {
  let gameOver = document.getElementById("game_over");
  let canvas = document.getElementById("game");
  canvas.classList.add("hide");
  gameOver.classList.add("show");
  gameOver.classList.remove("hide");
}

function generateSplashScreen() {
  let splash = document.getElementById("intro");
  game_over.classList.remove("show");
  game_over.classList.add("hide");
  splash.innerHTML = `
    <div>
        <button id="play_btn">Play Game</button>
    </div> `;
}

//  work. by clicking the button it move to the second div game_screen

const playButton = document.querySelector("#play_btn");
playButton.addEventListener("click", () => {
  intro.classList.remove("show");
  intro.classList.add("hide");
  const game = document.getElementById("game");
  game.classList.add("show");
  game.classList.remove("hide");
});

// sembra funzionare ma non si vede nulla

const startButton = document.getElementById("start_btn");
startButton.addEventListener("click", () => {
  let canvas = document.getElementById("mouse_escape");
  const ctx = canvas.getContext("2d");

  const PlayAgainButton = document.getElementById("playagain_btn");
  PlayAgainButton.addEventListener("click", () => {
    // game_over.classList.remove("show");
    game_over.classList.add("hide");
    const splash = document.getElementById("intro");
    splash.classList.remove("hide");
    splash.classList.add("show");
    // intro.classList.remove("hide");
    // intro.classList.add("show");
  });

  const mouseGame = new Game({
    ctx: ctx,
    width: 1200,
    height: 750,

    mouse: new Mouse(300, 720, ctx, 40, 40, 10), //add speedX value?

    obstacle: new Obstacle(ctx, 150, 0, 30, 30),
  });
  mouseGame.start();
});
