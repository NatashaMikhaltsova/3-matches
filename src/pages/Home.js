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
        Create matches of fruit pieces by swapping elements on the board to make a sequence of 3 or more by row or by column.
        Each match results in score which is summed during a game time.
        After 3 minutes the total score is saved to Leaderboard.
        </p>
        <p>
         Try it yourself and check how much you can achieve in Cooking Fancy!
          
        </p>
      </div>
    </div>
  `;
  return view;
}

export default Home;
