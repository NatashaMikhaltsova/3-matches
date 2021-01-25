let allMatches = [];

//remove matches
let removeMatches = (matches) => {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    for (let j = 0; j < match.length; j++) {
      if (match.horizontal) {
        squares[match.element + j].style.backgroundImage = "";
      } else {
        squares[match.element + j * width].style.backgroundImage = "";
      }
    }
  }
  allMatches.length = 0;
};

//check for all matches
let checkMatches = () => {
  allMatches = []
  
  for (let i = 0; i < 62; i++) {
    let rowIndex = Math.trunc(i / width);
    let colCounter = 1;
    let rowCounter = 1;

    //search for matches in row
    while (
      Math.trunc((i + rowCounter) / width) === rowIndex &&
      squares[i].style.backgroundImage === squares[i + rowCounter].style.backgroundImage
    ) {
      rowCounter++;
    }
    
    if (rowCounter > 2) {
      allMatches.push({ element: i, length: rowCounter, horizontal: true });
    }

    //search for matches in column
    while (
      i + width * colCounter < 64 &&
      squares[i].style.backgroundImage === squares[i + width * colCounter].style.backgroundImage
    ) {
      colCounter++;
    }

    if (colCounter > 2) {
      allMatches.push({ element: i, length: colCounter, horizontal: false });
    }
  }
  return allMatches
};
