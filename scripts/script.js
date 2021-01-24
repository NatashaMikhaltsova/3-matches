const grid = document.querySelector(".grid");
const width = 8;
const squares = [];
let score = 0;
const scoreDisplay = document.querySelector("#score");
const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
const fishColors = ["red", "yellow", "orange", "purple", "green", "blue"];

const generateRandomColor = (elem) => {
  let randomColor = Math.floor(Math.random() * fishColors.length);
  elem.style.backgroundColor = fishColors[randomColor];
  return elem;
}

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
};

let moveDown = () => {
  while (squares.some((elem) => elem.style.backgroundColor === "white")) {
    for (let i = 0; i < 64; i++) {
      if (squares[i].style.backgroundColor === "white") {
        if (firstRow.includes(i)) {
          generateRandomColor(squares[i]);
        } else {
          squares[i].style.backgroundColor = squares[i - width].style.backgroundColor;
          squares[i - width].style.backgroundColor = "white";
        }
      }
    }
  }
};

//update score
let updateScore = (matches) => {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    score += match.length;
    scoreDisplay.innerHTML = score;
  }
};


document.addEventListener("DOMContentLoaded", () => {
  createBoard();
  checkMatches();
  moveDown();
  dragElements();
});

window.setInterval(() => {
  moveDown();
  checkMatches();
}, 500);