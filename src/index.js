import router from "./routes";
import "./styles/style.css";
import getPreloader from "../src/components/preloader";
import { getModal, startGame, closeModal } from "../src/components/modal";
import {squares, allMatches, createBoard, checkMatches, checkMatchesExists, dragStart, dragEnd, dragDrop, dragEnter, dragLeave, dragOver, moveDown, updateScore, removeMatches, updateBoard} from "../src/components/game";

//Base layout
document.body.innerHTML = `
  <main>
    <div class="header" id="header"></div>
    <div id="content">test</div>
  </main>
`;

window.addEventListener("load", () => {
  //Load page
  router();

  //Preloader
  setTimeout(getPreloader, 2000);

  //Show modal
  const newGameBtn = document.querySelector("#newGame");
  const submitForm = document.querySelector("#registration");
  const allPage = document.body;
  if (newGameBtn && submitForm && allPage) {
    newGameBtn.addEventListener("click", getModal);
    submitForm.addEventListener("submit", startGame);
    allPage.addEventListener("click", closeModal);
  }

  //displayGame
    createBoard();
    squares.forEach((square) => square.addEventListener("dragstart", dragStart));
    squares.forEach((square) => square.addEventListener("dragend", dragEnd));
    squares.forEach((square) => square.addEventListener("dragover", dragOver));
    squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
    squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
    squares.forEach((square) => square.addEventListener("drop", dragDrop));
    
  
   window.setInterval(() => {
    /* if (!checkMatchesExists(squares)) {
      console.log("Ходов нет!");
      updateBoard();
    } */
    console.log(allMatches)
    //checkMatches(allMatches);
    //removeMatches(allMatches);
    //moveDown();
    //updateScore(allMatches);
    //console.log(allMatches)
  }, 3000); 
});

window.addEventListener("hashchange", () => {
  //Loading page
  router();

  //Preloader
  setTimeout(getPreloader, 2000);

  //Show modal
  const newGameBtn = document.querySelector("#newGame");
  const submitForm = document.querySelector("#registration");
  const allPage = document.body;

  if (newGameBtn && submitForm && allPage) {
    newGameBtn.addEventListener("click", getModal);
    submitForm.addEventListener("submit", startGame);
    allPage.addEventListener("click", closeModal);
  }

  
  //displayGame
  /* createBoard();
  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));
  if (!checkMatchesExists(squares)) {
    console.log("Ходов нет!");
  }

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
});
