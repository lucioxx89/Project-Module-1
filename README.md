# Project-Module-1

# MOUSE ESCAPE

It's a 2d game which purpose is to collect as many cheeses as possible. During the game there would be obstacle (mouse trap) falling down which the player has to avoid. If the player will crash against them the game will be over. Point counter will be display during the game.

## TECHNIQUE

- HTML5
- CSS
- Javascript - DOM Manipulation (show/hide) & Canvas(2d)

## **GAME SET UP**

#### Start Screen

- Splash screen
- Background image with title
- Play Button

#### Game Screen

- Canvas 2D with with a fixed (kitchen) background
- Start Button
- Player (mouse)
- Cheese (points on collision)
- Mouse traps ( gameover on collision)
- Real time score

#### Game Over Screen

- Play Again Button
- Background Picture
- Final Score

## GAME

- Create Interface (canvas)
- Create the Class Player
- Add horizontal movement to the player:left &right
- Create items that fall (cheese and trap) => class cheese and class obstacles
- Check for collision\_
  - if there is a collision with **Cheese(yellow box)**, a counter increases is actual score
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

**obstacles.js**

**points.js**
