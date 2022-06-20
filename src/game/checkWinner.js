import { gameboard, positionIndex } from "./gameBoardArray";

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
    message = 'Player 1 wins'
  }
  else if(player2wins)
  {
    winner = 'O'
    message = 'Player 2 wins'
  }
  else if (!gameboard.getBoard().includes(''))
  {
    winner = 'tie';
    message = 'Tie'
  }
  return {winner, message};
}
export default checkWinner;