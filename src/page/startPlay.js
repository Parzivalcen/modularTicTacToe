import { humanPlay, AIplay, gameEnded } from "../game/playersPlay";

const startPlay = (AI) => {
  document.querySelector('.board-container').addEventListener('click', (e) =>{
    
    let symbolHTML = e.target.firstChild;
    console.log(symbolHTML);
    if(symbolHTML.classList.contains("symbol") && symbolHTML.innerHTML === '' && !gameEnded)
    {
      if (AI){
        AIplay(e, 'X', 'O') 
      }else{
        humanPlay(e, 'X', 'O')
      }
      
    }
  })
} 
export default startPlay;