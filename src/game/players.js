  import {gameboard} from './gameBoardArray.js';

  const player = (number) => {
    let name = () => getName(number);  
    const play = (position) =>{
      if (number === 1)
      {
        gameboard.getBoard()[position] = 'X';
      }else if (number === 2)
      {
        gameboard.getBoard()[position] = 'O';
      }
    }
    return {name, play};
  }
  

export {player}



