import { humanPlay } from "../game/playersPlay";

const createBoard = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
  <div class="title">
    <h1>Tic-Tac-Toe</h1>
  </div>
  <div class="board-container">
    <div class="box" ><p data-box=0  class="symbol symbol--0"></p></div>
    <div class="box" ><p data-box=1  class="symbol symbol--1"></p></div>
    <div class="box" ><p data-box=2  class="symbol symbol--2"></p></div>
    <div class="box"><p  data-box=3 class="symbol symbol--3"></p></div>
    <div class="box" ><p data-box=4  class="symbol symbol--4"></p></div>
    <div class="box" ><p data-box=5  class="symbol symbol--5"></p></div>
    <div class="box" ><p data-box=6  class="symbol symbol--6"></p></div>
    <div class="box" ><p data-box=7  class="symbol symbol--7"></p></div>
    <div class="box" ><p data-box=8  class="symbol symbol--8"></p></div>
  </div>
  <button class="btn btn--reset">reset</button>
  `
  return container
}


export default createBoard;