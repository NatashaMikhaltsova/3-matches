const Header = () => {
  const view = `
    <header>
      <span class="title">Cooking Fancy</span>
      <ul id="menu">
        <li><a href="#/game" id="newGame">New Game</a></li>
        <li><a href="#/">Game Rules</a></li>
        <li><a href="#/scores">Leaderboard</a></li>
      </ul>
    </header>
  `;
  return view;
};

export default Header;
