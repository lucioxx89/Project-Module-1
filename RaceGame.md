# RACE GAME

It's a **race game**, the purpose of the game is to collect as many as gasoline tank as possible. During the race there would be enemies (police) on the street which the player has to avoid. If the player will crash against them the game will be over. Point counter

## TECHNIQUE

- HTML5
- CSS
- Javascript - Canvas

## **GAME SET UP**

#### Start Screen

- Splash screen
- Title
- Play Button

#### Game Screen

- Canvas
- Infinite Background scrolling down, speed increase over time
- Car/Player
- Gasoline tank
- Enemies

#### Game Over Screen

- Play Again Button
- Back to start screen

## GAME

- Create Interface
- Create the Player
- Add movement to the player:left &right
- Create items that fall
- Check collision\_
  - if there is a collision with **Gasoline tank**, a counter increase by 1
  - if there is a collision with the **enemy**, -> Game Over -> Back to Start Screen

## DATA STRUCTURE

**main.js**

createStartScreen();
createGameScreen();
createGameOverScreen();
deleteStartScreen();
deleteGameScreen();
deleteGameOverScreen();

**game.js**

Draw Player
Draw Gasoline tank
Draw Enemy

**player.js**

Player movement
