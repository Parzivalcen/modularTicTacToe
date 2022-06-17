import homePage from './home.js';
import {gameboard, positionIndex } from './game/gameBoardArray.js';
import {player} from './game/players.js';
import checkWinner from './game/checkWinner.js';

const body = document.body;

body.appendChild(homePage());
const player1 = player(1);
const player2 = player(2);



// console.log(player1)

console.log(gameboard.getBoard());

console.log( checkWinner().winner);
// console.log( positionIndex(boardArray, 2));