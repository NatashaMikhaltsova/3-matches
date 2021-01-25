let moveDown = () => {
  while (squares.some((elem) => elem.style.backgroundImage === "")) {
    for (let i = 0; i < 64; i++) {
      if (squares[i].style.backgroundImage === "") {
        if (firstRow.includes(i)) {
          generateRandomColor(squares[i]);
        } else {
          squares[i].style.backgroundImage =
            squares[i - width].style.backgroundImage;
          squares[i - width].style.backgroundImage = "";
        }
      }
    }
  }
};