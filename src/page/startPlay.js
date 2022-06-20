import { humanPlay } from "../game/playersPlay";

const startPlay = () => {
  document.querySelector('.board-container').addEventListener('click', (e) =>{
    let symbolHTML = e.target.firstChild;
    console.log(symbolHTML);
    if(symbolHTML.classList.contains("symbol") && symbolHTML.innerHTML === '')
    {
      humanPlay(e, 'X', 'O')
      
    }
  })
} 
export default startPlay;