const grid = document.querySelector(".grid");
const width = 8;
const squares = [];
let score = 0;
const scoreDisplay = document.querySelector("#score");
const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
const fruits = ["url(images/apple.svg)", "url(images/aubagine.svg)", "url(images/cherry.svg)", "url(images/cucumber.svg)", "url(images/lemons.svg)", "url(images/strawberry.svg)", "url(images/watermelon.svg)"];



const generateRandomColor = (elem) => {
  let randomColor = Math.floor(Math.random() * fruits.length);
  elem.style.backgroundImage = fruits[randomColor];
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





