import { gameboard, positionIndex } from "./gameBoardArray";
import { player1, player2 } from "./playersPlay";
const checkWinner = () => {
  const _winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner = false
  let message = "No one won yet";
 // Go to every winCombos index, if the numbers in one index of winCombos are the same symbol in the original array, return true. 
  let player1wins = _winCombos.some((comboIndex) => {
    return comboIndex.every((index) => positionIndex(index) === 'X')
  });
  let player2wins = _winCombos.some((comboIndex) => {
    return comboIndex.every((index) => positionIndex(index) === 'O')
  });
  if (player1wins)
  {
    winner = 'X'
    message = `${player1.name()} wins`
  }
  else if(player2wins)
  {
    winner = 'O'
    message = `${player2.name()} wins`
  }
  else if (!gameboard.getBoard().includes(''))
  {
    winner = 'tie';
    message = 'Tie'
  }
  return {winner, message};
}
export default checkWinner;