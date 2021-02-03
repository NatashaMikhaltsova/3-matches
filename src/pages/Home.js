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

    <div class="container hide" id="rules-block">
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
  `;
  return view;
}

export default Home;
