const Header = () => {
  const view = `
    <header>
      <span class="title">Match 3 Game</span>
      <ul id="menu">
        <li><a href="#/">Main Page</a></li>
        <li><a href="#/game" id="newGame">New Game</a></li>
        <li><a href="#/scores">Scores</a></li>
      </ul>
    </header>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Регистрация</h4>
        <form id="registration">
        <div>
          <label for="regName">Введите Ваше имя:</label>
          <input type="text" id="regName" name="regName" required />
          </div>
          <div class="modal-footer">
            <input type="submit" class="btn btn-outline-danger" value="Начать игру!"/>
            <input type="button" class="btn btn-outline-danger" id="closeBtn" value="Закрыть"/>
          </div>
        </form>
      </div>
    </div>
  `;
  return view;
};

export default Header;
