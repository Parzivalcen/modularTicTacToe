import {setgameEnded } from "../game/playersPlay";
import checkWinner from "../game/checkWinner";
import { gameboard } from "../game/gameBoardArray";

/*
when the reset button or a element that has that class is pressed, reset all the 
values
  - It gets called on playersPlay when there is a winner, and the htmlBoard, to 
  reset the values at any time
*/ 

const reset = (_played1, _played2) => {
  document.addEventListener('click', (e) => {  
    if(e.target.classList.contains('btn--reset')){
      _played1 = false;
      _played2 = false;
      // Modify gameEnded variable on players.Play.js
      setgameEnded(false)
      // modify check winner
      checkWinner().winner = false;
      
      let counter = 0;
      gameboard.getBoard().forEach(() => {
        // Clears array board
        gameboard.getBoard()[counter] = '';
        // Clear board on the  DOM. 
        document.querySelector(`.symbol--${counter}`).innerHTML = '';
        counter ++;
      })
      // Deletete END GAME message
      if(document.querySelector('.end-game-message'))
      {
        document.querySelector('.end-game-message').remove();
      }
    }
  })
}
export default reset; 