import {player} from './players.js'
import {gameboard} from './gameBoardArray.js';
import checkWinner from './checkWinner.js';
// Get position from player
import {getPositionFromPlayer, PositionOnDOMboard} from '../page/getPosition.js';
import endGame from '../page/endGameMessage.js';
import reset from '../page/btnReset.js';
import AIMove from './AImove';



const player1 = player(1);
const player2 = player(2);
let _played1 = false
let _played2 = false
let gameEnded =  false;


// Allow us to Set gameEnded from outside the module. 
const setgameEnded =(val) => gameEnded = val;

const humanPlay = (e, X, O) => {
  
  let box = getPositionFromPlayer(e);
  console.log('BOX', box)
  // check if player has played, if not, allow to play until there is a winner
  if (_played1) 
  {
      PositionOnDOMboard(e, O);
      player2.play(box);
      _played2 = true;
      _played1 = false;
    } 
    else 
    {
      
      PositionOnDOMboard(e, X);
      // populate board Array
      player1.play(box);
      
    _played1 = true;
    _played2 = false;
  }
    
  // print winner or tie on screen.
  if (checkWinner().winner || checkWinner().winner == 'tie' ) 
  {
    endGame();
    gameEnded = true;
    reset(_played1, _played2);
  }
  
  // LOG ARRAY
  console.log(gameboard.getBoard());  
  return{_played1, _played2};
}
// AI play
const AIplay = (e, X, O) => {
  let box =getPositionFromPlayer(e)
  PositionOnDOMboard(e, X);
  // populate board Array 
  player1.play(box);
  let aiMove = AIMove(gameboard.getBoard())
  console.log(aiMove)
  
  // If one of thse conditions is met, it does not have to play anymore
  if(aiMove !== undefined && !checkWinner().winner)
  {
    
    
    // populate board Array
    player2.play(aiMove)
    document.querySelector(`[data-box = "${aiMove}"]`).innerHTML = O;
    
  }
  
// print winner or tie on screen.
if (checkWinner().winner || checkWinner().winner == 'tie' ) 
{
  endGame();
}

// LOG ARRAY
console.log(gameboard.getBoard());

}

export {humanPlay, AIplay, gameEnded, setgameEnded, player1, player2}