//Create Board
let createBoard = () => {
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement("div");
    square.setAttribute("draggable", true);
    square.setAttribute("id", i);
    grid.appendChild(square);
    generateRandomColor(square);
    squares.push(square);
  }
  return squares;
};

//Update Board
let updateBoard = () => {
  for (let i = 0; i < width ** 2; i++) {
    generateRandomColor(squares[i])
  }
  return squares;
};