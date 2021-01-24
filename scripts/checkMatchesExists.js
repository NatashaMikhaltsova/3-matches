let checkMatchesExists = (squares) => {
  let currentElementColor;
  let nextElementColor;
  let bottomElementColor;
  let matchesExists = false;

  for (let i = 0; i < 63; i++) {
    //check for elements in the same row
    if (Math.trunc((i + 1) / width) === Math.trunc(i / width)) {
      currentElementColor = squares[i].style.backgroundColor;
      nextElementColor = squares[i + 1].style.backgroundColor;
      squares[i].style.backgroundColor = nextElementColor;
      squares[i + 1].style.backgroundColor = currentElementColor;
      checkMatches();
      squares[i].style.backgroundColor = currentElementColor;
      squares[i + 1].style.backgroundColor = nextElementColor;
      if (allMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }

    //check for elements in the same column
    if (i + width < 64) {
      bottomElementColor = squares[i + width].style.backgroundColor;
      squares[i].style.backgroundColor = bottomElementColor;
      squares[i + width].style.backgroundColor = currentElementColor;
      checkMatches();
      squares[i].style.backgroundColor = currentElementColor;
      squares[i + width].style.backgroundColor = bottomElementColor;
      if (allMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }
  }

  return matchesExists;
};
