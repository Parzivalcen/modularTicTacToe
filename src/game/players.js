  import {gameboard} from './gameBoardArray.js';
  import {getName, storeName} from '../page/getName.js';

  
  
  const player = (number) => {
    let name = () => {
      let name = getName(number)
      storeName(name);
      return name
    };  
    

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



