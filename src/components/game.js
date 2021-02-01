import apple from "../images/apple.svg";
import aubagine from "../images/aubagine.svg";
import cherry from "../images/cherry.svg";
import cucumber from "../images/cucumber.svg";
import lemons from "../images/lemons.svg";
import strawberry from "../images/strawberry.svg";
import watermelon from "../images/watermelon.svg";

const width = 8;
let squares = [];
let score = 0;
const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
let allMatches = [];
const fruits = [`url(${apple})`, `url(${aubagine})`, `url(${cherry})`, `url(${cucumber})`, `url(${lemons})`, `url(${strawberry})`, `url(${watermelon})`];
let colorBeginDragged;
  let colorBeginReplaced;
  let squareIdBeingDragged;
  let squareIdBeingReplaced;
  let count = 0;

//generate random fruits
const generateRandomFruits = (elem) => {
  let randomColor = Math.floor(Math.random() * fruits.length);
  elem.style.backgroundImage = fruits[randomColor];
  return elem;
};

//Create Board
const createBoard = () => {
  const grid = document.querySelector(".grid");
  if(grid) {
    for (let i = 0; i < width ** 2; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      grid.appendChild(square);
      generateRandomFruits(square);
      squares.push(square);
    }
    return squares;
  }
};

//Update Board
const updateBoard = () => {
  for (let i = 0; i < width ** 2; i++) {
    generateRandomFruits(squares[i])
  }
  return squares;
};

//Move top fruits down
let moveDown = () => {
  const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
  while (squares.some((elem) => elem.style.backgroundImage === "")) {
    for (let i = 0; i < 64; i++) {
      if (squares[i].style.backgroundImage === "") {
        if (firstRow.includes(i)) {
          generateRandomFruits(squares[i]);
        } else {
          squares[i].style.backgroundImage =
            squares[i - width].style.backgroundImage;
          squares[i - width].style.backgroundImage = "";
        }
      }
    }
  }
};

//check for all matches
let checkMatches = (arr) => {
  count++;
  //console.log(arr.length)
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
      arr.push({ element: i, length: rowCounter, horizontal: true });
      /* console.log(i + 'row push');
      console.log(arr.length) */
    }

    //search for matches in column
    while (
      i + width * colCounter < 64 &&
      squares[i].style.backgroundImage === squares[i + width * colCounter].style.backgroundImage
    ) {
      colCounter++;
    }

    if (colCounter > 2) {
      arr.push({ element: i, length: colCounter, horizontal: false });
      
    }
  }
  //console.log('arr after check matches' + arr.length)
  return arr
};

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
  //allMatches.length = 0;
};

//check that there is a match
let checkMatchesExists = (squares) => {
  let currentElementColor;
  let nextElementColor;
  let bottomElementColor;
  let virtualMatches = [];
  let matchesExists = false;

  for (let i = 0; i < 63; i++) {
    //check for elements in the same row
    if (Math.trunc((i + 1) / width) === Math.trunc(i / width)) {
      currentElementColor = squares[i].style.backgroundImage;
      nextElementColor = squares[i + 1].style.backgroundImage;
      squares[i].style.backgroundImage = nextElementColor;
      squares[i + 1].style.backgroundImage = currentElementColor;
      checkMatches(virtualMatches);
      squares[i].style.backgroundImage = currentElementColor;
      squares[i + 1].style.backgroundImage = nextElementColor;
      if (virtualMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }
    //check for elements in the same column
    if (i + width < 64) {
      bottomElementColor = squares[i + width].style.backgroundImage;
      squares[i].style.backgroundImage = bottomElementColor;
      squares[i + width].style.backgroundImage = currentElementColor;
      checkMatches(virtualMatches);
      squares[i].style.backgroundImage = currentElementColor;
      squares[i + width].style.backgroundImage = bottomElementColor;
      if (virtualMatches.length > 0) {
        matchesExists = true;
        break;
      }
    }
  }
  return matchesExists;
};

//drag elements logic
let dragStart = (e) => {
  colorBeginDragged = e.target.style.backgroundImage;
  squareIdBeingDragged = parseInt(e.target.id);
};

let dragDrop = (e) => {
  colorBeginReplaced = e.target.style.backgroundImage;
  squareIdBeingReplaced = parseInt(e.target.id);
  e.target.style.backgroundImage = colorBeginDragged;
  squares[squareIdBeingDragged].style.backgroundImage = colorBeginReplaced;
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
  let dragArray = [];

  checkMatches(dragArray);

  if (squareIdBeingReplaced && validMove && dragArray.length > 0) {
    squareIdBeingReplaced = null;
  } else if (squareIdBeingReplaced && !validMove || squareIdBeingReplaced && dragArray.length === 0) {
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



//update score
let updateScore = (matches) => {
  //console.log(matches)
  const scoreDisplay = document.querySelector("#score");
  if (scoreDisplay && matches.length !== 0) {
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i];
      score += match.length;
      scoreDisplay.innerHTML = score;
    }
  }
//matches = [];
//console.log(matches)
};




/* document.addEventListener("DOMContentLoaded", () => {
  createBoard();
  checkMatchesExists(squares);
  dragElements();
  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));
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
}, 500); */

export {squares, allMatches, count, createBoard, checkMatches, checkMatchesExists, dragStart, dragEnd, dragDrop, dragEnter, dragLeave, dragOver, moveDown, updateScore, removeMatches, updateBoard};
 





