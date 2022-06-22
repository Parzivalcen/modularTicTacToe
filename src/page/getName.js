
const getName = (playerNumber) =>{
  let name;
  name = document.querySelector(`#name-${playerNumber}`).value;
  if (name == '')
  {
    name = `Player ${playerNumber}`
  }
  return name;
}
// Store names in Local Storage and or list.
/*
this function is called when player.name()  is called to store the name from the 
form on a list called names.
  - Ths list names is used on the checkWinner() module for the message of who wins
  names[0] == player 1, names[1] == player 2
*/ 
// Can you change this wihtout changing the winner module???
const getNames = () => {
  let names = [];
  
  return names
}
let names = []
const storeName = (name) => {
  names.push(name);
  return names
}
export { getName, storeName, names};