## Modular Tic-Tac-Toe
The game folder hold everything that has to do with the game itself, at the page folder has scripts that interact with the DOM, at least that is the goal. 

## Game 
### gameBoardArray.js
This file is on the game folder because it, does not interact with any element of the game logic 
- `gameboard` gets you a board
- `positionIndex` takes an index position, it returns what is in that position. 

### players.js
This module helps us to create our player later in the human or AI play functions, and it allows them to play and get their names.
- `player.play(position)` tells the player where in the array is going to `position` the symbol that represents that player. 
- `player.name()` is **not implemented yet**

### humanPlay.js

# DOM Manipulation
### startPlay.js
StartPlay is on the page because of it interactions with the DOM. 
It listens for a click on the game board, and it calls the function `humanPlay()` if we press inside a box of the board container. The `humanPlay()` function is imported from the game folder to **startPlay.js**