# Project-Module-1

# MOUSE ESCAPE

It's a 2d game the purpose of the game is to collect as many cheese as possible. During the game there would be obstacle (mouse trap) falling down which the player has to avoid. If the player will crash against them the game will be over. Point counter will be display during the game.

## TECHNIQUE

- HTML5
- CSS
- Javascript - Canvas(2d)

## **GAME SET UP**

#### Start Screen

- Splash screen
- Background image with title
- Play Button

#### Game Screen

- Canvas 2D with with fixed kitchen background
- Start Button
- Player (mouse)
- Cheese (points on collision)
- Trap ( gameover on collision)
- Score

#### Game Over Screen

- Play Again Button
- Bacground Picture
- Final Score

## GAME

- Create Interface
- Create the Class Player
- Add horizontal movement to the player:left &right
- Create items that fall (cheese and trap) => class cheese and class obstacles
- Check for collision\_
  - if there is a collision with **Cheese(yellow box)**, a counter increase is actual score
  - if there is a collision with the **mouse trap(red box)**, -> Game Over -> Back to Start Screen

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
