import router from "../routes";
import "../styles/style.css";
import getPreloader from "../components/preloader";
import { getModal, startGame, closeModal } from "../components/modal";
import {
  squares,
  createBoard,
  dragStart,
  dragEnd,
  dragDrop,
  dragEnter,
  dragLeave,
  dragOver,
  updateBoard,
} from "../components/gameLogic";
import { setTimer, stopTimer } from "../components/timer";

const getContent = async () => {
  //Load page
  await router();

  //Preloader
  setTimeout(getPreloader, 2000);

  //displayGame
  createBoard();

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  //Show modal
  const newGameBtn = document.querySelector("#newGame");
  const submitForm = document.querySelector("#registration");
  const closeButton = document.querySelector("#closeBtn");

  if (newGameBtn && submitForm && closeButton) {
    newGameBtn.addEventListener("click", (e) => {
      getModal(e);
    });
    submitForm.addEventListener("submit", (e) => {
      startGame(e);
       if (squares.length > 0) {
        updateBoard();
      } 
      setTimer();
    });
    closeButton.addEventListener("click", (e) => {
      closeModal(e);
    });
  }
};

export { getContent };
