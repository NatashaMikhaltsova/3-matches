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
const fruits = [
  `url(${apple})`,
  `url(${aubagine})`,
  `url(${cherry})`,
  `url(${cucumber})`,
  `url(${lemons})`,
  `url(${strawberry})`,
  `url(${watermelon})`,
];
let colorBeginDragged;
let colorBeginReplaced;
let squareIdBeingDragged;
let squareIdBeingReplaced;

//generate random fruits
const generateRandomFruits = (elem) => {
  let randomColor = Math.floor(Math.random() * fruits.length);
  elem.style.backgroundImage = fruits[randomColor];
  return elem;
};

//Create board that contains (width^2) elements. Each element can be draggable
const createBoard = () => {
  const grid = document.querySelector(".grid");
  if (grid) {
    for (let i = 0; i < width ** 2; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      grid.appendChild(square);
      generateRandomFruits(square);
      if (squares.length === width ** 2) {
        squares[i] = square
      }else {
        squares.push(square);
      }
    }
    return squares;
  }
};

//All elements in board will contain another random image.
const updateBoard = () => {
  for (let i = 0; i < width ** 2; i++) {
    generateRandomFruits(squares[i]);
  }
  return squares;
};

//Function searches for elements without images. In such cases top fruits will move down, and for the first row new images will be generated
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

//Function iterates over all images and checks matches 3 or more elements in rows and columns. If matches found, they will be saved to array
let checkMatches = (arr) => {
  for (let i = 0; i < 62; i++) {
    let rowIndex = Math.trunc(i / width);
    let colCounter = 1;
    let rowCounter = 1;

    //search for matches in row
    while (
      Math.trunc((i + rowCounter) / width) === rowIndex &&
      squares[i].style.backgroundImage ===
        squares[i + rowCounter].style.backgroundImage
    ) {
      rowCounter++;
    }

    if (rowCounter > 2) {
      arr.push({ element: i, length: rowCounter, horizontal: true });
    }

    //search for matches in column
    while (
      i + width * colCounter < 64 &&
      squares[i].style.backgroundImage ===
        squares[i + width * colCounter].style.backgroundImage
    ) {
      colCounter++;
    }

    if (colCounter > 2) {
      arr.push({ element: i, length: colCounter, horizontal: false });
    }
  }
  return arr;
};

//Function removes images from elements which were saved in array with matches
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
};

// Function iterates over all images. In each iteration it swaps adjacent elements and check that matches exists. If any virtual match exists, the function return 'true'
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

//function saves id and image of draggable element (start drag element)
let dragStart = (e) => {
  colorBeginDragged = e.target.style.backgroundImage;
  squareIdBeingDragged = parseInt(e.target.id);
};

//function that changes id and image of cells after drop
let dragDrop = (e) => {
  colorBeginReplaced = e.target.style.backgroundImage;
  squareIdBeingReplaced = parseInt(e.target.id);
  e.target.style.backgroundImage = colorBeginDragged;
  squares[squareIdBeingDragged].style.backgroundImage = colorBeginReplaced;
};

//Function checks that after element drop matches appear. If it's OK, 2 elements will be swapped. If it's not - draggable element will return on previous place.
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
  } else if ((squareIdBeingReplaced && !validMove) ||(squareIdBeingReplaced && dragArray.length === 0)) {
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

//Update score on page
let updateScore = (matches) => {
  const scoreDisplay = document.querySelector("#score");
  if (scoreDisplay && matches.length !== 0) {
    for (let i = 0; i < matches.length; i++) {
      let match = matches[i];
      score += match.length;
      scoreDisplay.innerHTML = score;
    }
  }
};

const clearScore = () => {
  score = 0;
}

 export {
  squares,
  allMatches,
  createBoard,
  checkMatches,
  checkMatchesExists,
  dragStart,
  dragEnd,
  dragDrop,
  dragEnter,
  dragLeave,
  dragOver,
  moveDown,
  updateScore,
  removeMatches,
  updateBoard,
  clearScore
} ;