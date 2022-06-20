import {player} from './players.js'
import {gameboard} from './gameBoardArray.js';
import checkWinner from './checkWinner.js';
// Get position from player
import {getPositionFromPlayer, PositionOnDOMboard} from '../page/getPosition.js';
import endGame from '../page/endGameMessage.js';


const player1 = player(1);
const player2 = player(2);
let _played1 = false
let _played2 = false
const humanPlay = (e, X, O) => {
  
  let box = getPositionFromPlayer(e);
  console.log('BOX', box)
  // check if player has played, if not, allow to play until there is a winner
  if (_played1) 
  {
      console.log(O)
      PositionOnDOMboard(e, O);
      player2.play(box);
      
      _played2 = true;
      _played1 = false;
      console.log(_played1);
      console.log(_played2);
    } 
    else 
    {
      
      PositionOnDOMboard(e, X);
      // populate board Array
      player1.play(box);
      
    _played1 = true;
    _played2 = false;
    console.log(_played1);
    console.log(_played2);
  }
    
  // print winner or tie on screen.
  if (checkWinner().winner || checkWinner().winner == 'tie' ) 
  {
    endGame();
  }
  
  // LOG ARRAY
  console.log(gameboard.getBoard());  
  return{_played1, _played2};
}
export {humanPlay}