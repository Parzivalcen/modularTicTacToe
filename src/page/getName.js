
const getName = (playerNumber) =>{
  let name;
  name = document.querySelector(`#name-${playerNumber}`).value;
  if (playerNumber == '')
  {
    name = `Player ${playerNumber}`
  }
  return name;
}
export default getName;