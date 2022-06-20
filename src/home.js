import icon from './imgs/O.svg'
const home = () =>{
  const homePage = document.createElement('div')
  homePage.classList.add('container', 'container--home')
  homePage.innerHTML = `
  <div class="title">
    <h1>Tic-Tac-Toe</h1>
  </div>
  <form class="names">
    <h2>Welcome, enter a cool Name.</h2>
    <div class="form">
      <div class="input-fields">
        <!-- Player 1 name -->
        <label for="name-1" class="player-name">Player 1 name:</label>
        <input type="text" class="form" id="name-1" name="name-1">
        <!-- Player 2 name -->
          <label for="name-2" class="player-name">Player 2 name:</label>
          <input type="text" class="form" id="name-2" name="name-2">
      </div>
      <!-- Buttons -->
      <div class="btns">
        <button class="btn btn--play" type="submit" >Play!</button>
        <button class="btn btn--a-i">Play with A.I.</button>
      </div>
    </div>
</form>
  `
  return homePage;
}
export default home