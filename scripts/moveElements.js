let moveDown = () => {
  while (squares.some((elem) => elem.style.backgroundColor === "white")) {
    for (let i = 0; i < 64; i++) {
      if (squares[i].style.backgroundColor === "white") {
        if (firstRow.includes(i)) {
          generateRandomColor(squares[i]);
        } else {
          squares[i].style.backgroundColor =
            squares[i - width].style.backgroundColor;
          squares[i - width].style.backgroundColor = "white";
        }
      }
    }
  }
};