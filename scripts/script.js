document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const width = 8;
  const squares = [];
  let score = 0;
  const scoreDisplay = document.querySelector('#score');
  const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];

  const fishColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
  ]

  //Create Board
  let createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('draggable', true);
      square.setAttribute('id', i);
      grid.appendChild(square);
      let randomColor = Math.floor(Math.random() * fishColors.length);
      square.style.backgroundColor = fishColors[randomColor];
      squares.push(square);
    }
  }
  createBoard();

  //Drag the fish
  let colorBeginDragged;
  let colorBeginReplaced;
  let squareIdBeingDragged;
  let squareIdBeingReplaced;

  let dragStart = (e) => {
    colorBeginDragged = e.target.style.backgroundColor;
    squareIdBeingDragged = parseInt(e.target.id);
  }

  let dragEnd = (e) => {
    e.preventDefault();

    //What is a valid move?
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width,
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width
    ]

    let validMove = validMoves.includes(squareIdBeingReplaced)
    if (squareIdBeingReplaced && validMove) {
      squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !validMove) {
      squares[squareIdBeingReplaced].style.backgroundColor = colorBeginReplaced;
      squares[squareIdBeingDragged].style.backgroundColor = colorBeginDragged;
    } else {
      squares[squareIdBeingDragged].style.backgroundColor = squareIdBeingDragged;
    }
  }

  let dragOver = (e) => {
    e.preventDefault();

  }

  let dragEnter = (e) => {
    e.preventDefault();

  }

  let dragLeave = (e) => {
    e.preventDefault();

  }

  let dragDrop = (e) => {
    colorBeginReplaced = e.target.style.backgroundColor;
    squareIdBeingReplaced = parseInt(e.target.id);
    e.target.style.backgroundColor = colorBeginDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeginReplaced
  }
  squares.forEach(square => square.addEventListener('dragstart', dragStart));
  squares.forEach(square => square.addEventListener('dragend', dragEnd));
  squares.forEach(square => square.addEventListener('dragover', dragOver));
  squares.forEach(square => square.addEventListener('dragenter', dragEnter));
  squares.forEach(square => square.addEventListener('dragleave', dragLeave));
  squares.forEach(square => square.addEventListener('drop', dragDrop));

  //drop fish once some have been cleared
  
  let moveDown = () => {
    while (squares.some(elem => elem.style.backgroundColor === 'white')) {
      //console.log(5);
      for (let i = 0; i < 64; i++) {
        if (squares[i].style.backgroundColor === 'white') {
          if (firstRow.includes(i)) {
            let randomColor = Math.floor(Math.random() * fishColors.length);
            squares[i].style.backgroundColor = fishColors[randomColor];
          } else {
            squares[i].style.backgroundColor = squares[i - width].style.backgroundColor;
            squares[i - width].style.backgroundColor = 'white';
          }
        }
      }
    }
  }
  


  //Checking for matches
  //check for row of three
  let checkRowForThree = () => {
    for (let i = 0; i < 62; i++) {
      let rowOfTree = [i, i + 1, i + 2];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === 'white';

      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
      if (notValid.includes(i)) continue;

      if (rowOfTree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
        score += 3;
        scoreDisplay.innerHTML = score;
        rowOfTree.forEach(index => {
          squares[index].style.backgroundColor = 'white';
        })
      }
    }
  }

  //check for column of three
  let checkColumnForThree = () => {
    for (let i = 0; i < 48; i++) {
      let columnOfTree = [i, i + width, i + (width * 2)];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === 'white';



      if (columnOfTree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
        score += 3;
        scoreDisplay.innerHTML = score;
        columnOfTree.forEach(index => {
          squares[index].style.backgroundColor = 'white';
        })
      }
    }
  }

  //check for row of four
  let checkRowForFour = () => {
    for (let i = 0; i < 61; i++) {
      let rowOfFour = [i, i + 1, i + 2, i + 3];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === 'white';

      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
      if (notValid.includes(i)) continue;

      if (rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
        score += 4;
        scoreDisplay.innerHTML = score;
        rowOfFour.forEach(index => {
          squares[index].style.backgroundColor = 'white';
        })
      }
    }
  }

  //check for column of four
  let checkColumnForFour = () => {
    for (let i = 0; i < 40; i++) {
      let columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === 'white';
      /* console.log(squares[i])
      let checkBackgroundColor = i => console.log(squares[i].style.backgroundColor === decidedColor);
      checkBackgroundColor();
      console.log(checkBackgroundColor()) */

      if (columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
        score += 4;
        scoreDisplay.innerHTML = score;
        columnOfFour.forEach(index => {
          squares[index].style.backgroundColor = 'white';
        })
      }
    }
  }

  //TODO: join checkrow and check column
  
  //check for row
  let checkRow = () => {
    for (let i = 0; i < 62; i++) {
      let rowIndex = Math.trunc(i/width);
      let colorCounter = 1;
      while ( Math.trunc((i + colorCounter) / width) === rowIndex && 
      squares[i].style.backgroundColor === squares[i + colorCounter].style.backgroundColor) {
        colorCounter++;
      } 
      if (colorCounter > 2) {
        score += colorCounter;
        scoreDisplay.innerHTML = score;
        for (let j = 0; j < colorCounter; j++) {
          squares[i+j].style.backgroundColor = 'white'
        }
      }
      
    }
  }

  //check for column
  let checkColumn = () => {
    for (let i = 0; i < 48; i++) {
      let colorCounter = 1;
      while ( (i + width * colorCounter) < 64 && 
      squares[i].style.backgroundColor === squares[i + width * colorCounter].style.backgroundColor) {
        colorCounter++;
      } 
      if (colorCounter > 2) {
        score += colorCounter;
        scoreDisplay.innerHTML = score;
        for (let j = 0; j < colorCounter; j++) {
          squares[i+j * width].style.backgroundColor = 'white'
        }
      }
      
    }
  }
  /* let checkColumnForThree = () => {
    for (let i = 0; i < 48; i++) {
      let columnOfTree = [i, i + width, i + (width * 2)];
      let decidedColor = squares[i].style.backgroundColor;
      const isBlank = squares[i].style.backgroundColor === 'white';



      if (columnOfTree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
        score += 3;
        scoreDisplay.innerHTML = score;
        columnOfTree.forEach(index => {
          squares[index].style.backgroundColor = 'white';
        })
      }
    }
  } */


  /* //checkRowForFour();
  checkColumnForFour();
  //checkRowForThree();
  checkColumnForThree(); */
  moveDown();
  checkRow();
  checkColumn();
  


  window.setInterval(() => {
    moveDown();
    /* //checkRowForFour();
    checkColumnForFour();
    //checkRowForThree();
    checkColumnForThree(); */
    checkRow();
    checkColumn();
    
  }, 1000);

})

