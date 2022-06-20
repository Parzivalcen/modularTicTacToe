import homePage from './home.js';
import createBoard from './page/htmlBoard.js';
import {gameboard, positionIndex } from './game/gameBoardArray.js';
import {player} from './game/players.js';
import checkWinner from './game/checkWinner.js';
import placeSymbol from './page/placeSymbol.js';
import {humanPlay} from './game/humanPlay.js';
import './styles.css'

const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

main.appendChild(homePage());
// Play btn clicked
const btnPlay = document.querySelector('.btn--play');
btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.container--home').remove();
  main.appendChild(createBoard());
  placeSymbol()
})


// while (!checkWinner().winner){
//   humanPlay('X', 'O')
// }




// console.log(player1)

console.log(gameboard.getBoard());

console.log( checkWinner().winner);
// console.log( positionIndex(boardArray, 2));