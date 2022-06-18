import {startGame} from "../components/modal"

const Game = (e) => {
  const getUserName = startGame(e);
  const view = `
    <div id="game" class="container">
    <div class="user-board">
        <h1>Hello, <span id="userName">${getUserName}</span>!</h1>
      </div>
    <div class="timer-board">
        <h3> Remaining time:</h3>
        <h3 id="timer"></h3>
      </div>
      <div class="score-board">
        <h1> Score:</h1>
        <h1 id="score">0</h1>
      </div>
      
      <div class="grid"></div>
    </div>
    `;
  return view;
}

export default Game;