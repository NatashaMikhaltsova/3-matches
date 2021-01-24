//update score
let updateScore = (matches) => {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    score += match.length;
    scoreDisplay.innerHTML = score;
  }
};