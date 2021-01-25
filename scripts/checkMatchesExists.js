let checkMatchesExists = (squares) => {
  let currentElementColor;
  let nextElementColor;
  let bottomElementColor;
  let matchesExists = false;

  for (let i = 0; i < 63; i++) {
    //check for elements in the same row
    if (Math.trunc((i + 1) / width) === Math.trunc(i / width)) {
      currentElementColor = squares[i].style.backgroundImage;
      nextElementColor = squares[i + 1].style.backgroundImage;
      squares[i].style.backgroundImage = nextElementColor;
      squares[i + 1].style.backgroundImage = currentElementColor;
      checkMatches();
      squares[i].style.backgroundImage = currentElementColor;
      squares[i + 1].style.backgroundImage = nextElementColor;
      if (allMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }

    //check for elements in the same column
    if (i + width < 64) {
      bottomElementColor = squares[i + width].style.backgroundImage;
      squares[i].style.backgroundImage = bottomElementColor;
      squares[i + width].style.backgroundImage = currentElementColor;
      checkMatches();
      squares[i].style.backgroundImage = currentElementColor;
      squares[i + width].style.backgroundImage = bottomElementColor;
      if (allMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }
  }

  return matchesExists;
};
