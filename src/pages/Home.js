import "../styles/style.css";

const Home = () => { 
  const view = `
  <div class="preloader-container">
      <div class="loader">
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--text"></div>
      </div>
    </div>
    <header>
      
        <span class="title">Match 3 Game</span>
        <div id="menu">
          <button type="button" class="btn btn-outline-danger">
            Main Page
          </button>
          <button type="button" class="btn btn-outline-danger" id="newGame">
            New Game
          </button>
          <button type="button" class="btn btn-outline-danger">Scores</button>
        </div>
      
    </header>

    <div class="container">
      <div class="rules-content">
        <h2 class="rules-title">Rules</h2>
        <p>
          Your goal in Match 3 Game is to clear as many rows and columns as
          possible in as few moves as possible in 3 minutes.
        </p>
        <p>
          You can clear fruits pieces from the board by lining up three (or
          more) in a row, which is accomplished by swapping pieces of fruits in
          order to create three of a kind. The initial objective of this game is
          to earn as more as possible number of points during 3 minutes.
        </p>
      </div>
    </div>

    <div id="game" class="hide">
      <div class="score-board">
        <h1>Score:</h1>
        <h1 id="score">0</h1>
      </div>
      <div class="grid"></div>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Регистрация</h4>
        <form id="registration">
          <label for="regName">Введите Ваше имя:</label>
          <input type="text" id="regName" name="regName" required />
          <div class="modal-footer">
            <input type="submit" class="btn btn-outline-danger" value="Начать игру!"/>
            <input type="button" class="btn btn-outline-danger" id="closeBtn" value="Закрыть"/>
          </div>
        </form>
      </div>
    </div>
  `;
  return view;
}

export default Home;
