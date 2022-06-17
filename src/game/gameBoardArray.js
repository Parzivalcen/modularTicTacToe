const gameboard = (() => {
  let _boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => _boardArr;
  return { getBoard };
})();

const positionIndex = (index) => gameboard.getBoard()[index];


export {gameboard, positionIndex}