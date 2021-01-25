let dragElements = () => {
  let colorBeginDragged;
  let colorBeginReplaced;
  let squareIdBeingDragged;
  let squareIdBeingReplaced;

  let dragStart = (e) => {
    colorBeginDragged = e.target.style.backgroundImage;
    squareIdBeingDragged = parseInt(e.target.id);
  };

  let dragEnd = (e) => {
    e.preventDefault();

    //What is a valid move?
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width,
    ];
    let validMove = validMoves.includes(squareIdBeingReplaced);

    checkMatches();

    if (squareIdBeingReplaced && validMove && allMatches.length > 0) {
      squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove || squareIdBeingReplaced && allMatches.length === 0) {
      squares[squareIdBeingReplaced].style.backgroundImage = colorBeginReplaced;
      squares[squareIdBeingDragged].style.backgroundImage = colorBeginDragged;
    } else {
      squares[squareIdBeingDragged].style.backgroundImage = squareIdBeingDragged;
    }
  };

  let dragOver = (e) => {
    e.preventDefault();
  };

  let dragEnter = (e) => {
    e.preventDefault();
  };

  let dragLeave = (e) => {
    e.preventDefault();
  };

  let dragDrop = (e) => {
    colorBeginReplaced = e.target.style.backgroundImage;
    squareIdBeingReplaced = parseInt(e.target.id);
    e.target.style.backgroundImage = colorBeginDragged;
    squares[squareIdBeingDragged].style.backgroundImage = colorBeginReplaced;
  };
  
  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));
};