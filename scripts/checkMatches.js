//remove matches
let removeMatches = (matches) => {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    for (let j = 0; j < match.length; j++) {
      if (match.horizontal) {
        squares[match.element + j].style.backgroundColor = "white";
      } else {
        squares[match.element + j * width].style.backgroundColor = "white";
      }
    }
  }
};

//check for all matches
let checkMatches = () => {
  let allMatches = [];

  for (let i = 0; i < 62; i++) {
    let rowIndex = Math.trunc(i / width);
    let colCounter = 1;
    let rowCounter = 1;

    //search for matches in row
    while (
      Math.trunc((i + rowCounter) / width) === rowIndex &&
      squares[i].style.backgroundColor === squares[i + rowCounter].style.backgroundColor
    ) {
      rowCounter++;
    }
    
    if (rowCounter > 2) {
      allMatches.push({ element: i, length: rowCounter, horizontal: true });
    }

    //search for matches in column
    while (
      i + width * colCounter < 64 &&
      squares[i].style.backgroundColor === squares[i + width * colCounter].style.backgroundColor
    ) {
      colCounter++;
    }

    if (colCounter > 2) {
      allMatches.push({ element: i, length: colCounter, horizontal: false });
    }
  }

  removeMatches(allMatches);
  updateScore(allMatches);
};
