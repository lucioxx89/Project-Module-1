



function printGameOver() {
    let gameOver = document.getElementById("game_over");
    let canvas = document.getElementById("race_car");
    // canvas.style = "display: block";
    // gameOver.style = "display: none";
    canvas.classList.add("hide");
    gameOver.classList.add("show");
    gameOver.classList.remove("hide");

}

function generateSplashScreen () {
    let splash = document.getElementById("intro");
    splash.innerHTML = `
    <div>
        <button id="play_btn">Play Game</button>
    </div> `;
    
}


//  work. by clicking the button i move to the second div game_screen

const playButton = document.querySelector("#play_btn");
playButton.addEventListener("click", () => {
   intro.classList.remove("show");
   intro.classList.add("hide");
   const game = document.getElementById("game");
   game.classList.add("show");
   game.classList.remove("hide");

})


// sembra funzionare ma non si vede nulla

const startButton = document.getElementById("start_btn");
startButton.addEventListener("click", () => {
    let canvas = document.getElementById("race_car");
    const ctx = canvas.getContext("2d");
    const raceGame = new Game (
        {
            ctx: ctx,
            rows: canvas.width / 10,
            columns: canvas.height / 10,
        },
    );
})






