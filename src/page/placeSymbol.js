import { humanPlay } from "../game/humanPlay";

const placeSymbol = () => {
  document.querySelector('.board-container').addEventListener('click', (e) =>{
    let symbolHTML = e.target.firstChild;
    console.log(symbolHTML);
    if(symbolHTML.classList.contains("symbol") && symbolHTML.innerHTML === '')
    {
      humanPlay(e, 'X', 'O')
      
    }
  })
} 
export default placeSymbol;