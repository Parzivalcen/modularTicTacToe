import homePage from './home.js';
import createBoard from './page/htmlBoard.js';
import {gameboard, positionIndex } from './game/gameBoardArray.js';
import checkWinner from './game/checkWinner.js';
import startPlay from './page/startPlay.js';


import './styles.css'


const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

main.appendChild(homePage());

// Play btn clicked
const btnPlay = document.querySelector('.btn--play');
const btnPlayAI = document.querySelector('.btn--a-i')
btnPlay.addEventListener('click', (e) => {
  e.preventDefault();
  main.appendChild(createBoard());
  document.querySelector('.container--home').remove();
  startPlay(false)
})
btnPlayAI.addEventListener('click', (e) => {
  e.preventDefault();
  main.appendChild(createBoard());
  document.querySelector('.container--home').remove();
  startPlay(true)
})


// while (!checkWinner().winner){
//   humanPlay('X', 'O')
// }




// console.log(player1)

console.log(gameboard.getBoard());

console.log( checkWinner().winner);
// console.log( positionIndex(boardArray, 2));