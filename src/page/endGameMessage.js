import checkWinner from "../game/checkWinner";
const endGame = () => {
  const win = document.createElement('div');
  win.classList.add('end-game-message', 'game-over');
  win.innerHTML = `
  <h1>${checkWinner().message}</h1>
  <button class="btn btn--reset">Play again</button>
    `;
  document.querySelector('.container').appendChild(win);
}

export default(endGame);