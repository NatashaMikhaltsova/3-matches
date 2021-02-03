import {startGame} from "../components/modal";
const Game = () => {
  const view = `
    <div id="game">
      <div class="container score-board">
        <h1> Score:</h1>
        <h1 id="score">0</h1>
      </div>
      <div class="grid"></div>
    </div>
    `;
  return view;
}

export default Game;