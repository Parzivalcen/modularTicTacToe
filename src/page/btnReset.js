import {setgameEnded } from "../game/playersPlay";
import checkWinner from "../game/checkWinner";
import { gameboard } from "../game/gameBoardArray";

const reset = (_played1, _played2) => {
  document.addEventListener('click', (e) => {  
    if(e.target.classList.contains('btn--reset')){
      _played1 = false;
      _played2 = false;
      setgameEnded(false)
      checkWinner().winner = false;
      let counter = 0;
      gameboard.getBoard().forEach(() => {
        gameboard.getBoard()[counter] = '';
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