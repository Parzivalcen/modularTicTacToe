// This module will handle the movement for the AI 
const AImove = (boardArray) => {
  let posibleMoves = [];
  for(let i = 0, len = boardArray.length; i < len; i++){
    if(boardArray[i] === ''){
      posibleMoves.push(i);
    }

  }
  let random = Math.floor(Math.random()*posibleMoves.length);
  
  return posibleMoves[random];
}
export default AImove;