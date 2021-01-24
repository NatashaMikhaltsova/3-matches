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
};

document.addEventListener("DOMContentLoaded", () => {
  createBoard();
  checkMatchesExists(squares);
  dragElements();
  if (!checkMatchesExists(squares)) {
    console.log("Ходов нет!");
  }
});

window.setInterval(() => {
  if (!checkMatchesExists(squares)) {
    console.log("Ходов нет!");
    updateBoard();
  }
  moveDown();
  checkMatches();
  updateScore(allMatches);
  removeMatches(allMatches);
}, 500); 





