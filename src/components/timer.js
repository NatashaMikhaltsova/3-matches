import {
  squares,
  allMatches,
  checkMatches,
  checkMatchesExists,
  moveDown,
  updateScore,
  removeMatches,
  updateBoard,
  dragStart,
  dragEnd,
  dragDrop,
  dragEnter,
  dragLeave,
  dragOver,
  clearScore,
  createBoard,
} from "../components/gameLogic";
import { postAccount } from "../utils/getAccounts";

let timerThreeMin = 0;
let beginTimeStamp, endTimeStamp, secRemaining, minRemaining, currentSec;

const stopTimer = () => {
  clearInterval(timerThreeMin);
  timerThreeMin = 0;

  let userName = document.querySelector("#userName");
  let userScore = document.querySelector("#score");
  if ((userName, userScore)) {
    postAccount(userName.innerText.trim(), userScore.innerText);
  }
  console.log('stop')
};

const updateGame = () => {
  const timerSelector = document.querySelector("#timer");

  if (!checkMatchesExists(squares)) {
    alert("No moves!");
    updateBoard();
  }

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  secRemaining = endTimeStamp - Math.floor(Date.now() / 1000);
  if (secRemaining < 1) {
    stopTimer();
    squares.forEach((elem) => elem.setAttribute("draggable", false));
  }
  if (timerSelector) {
    secRemaining = endTimeStamp - Math.floor(Date.now() / 1000);
    minRemaining = Math.trunc(secRemaining / 60);
    currentSec = secRemaining % 60;
    timerSelector.innerHTML = `${
      minRemaining < 10 ? `0${minRemaining}` : minRemaining
    }:${currentSec < 10 ? `0${currentSec}` : currentSec}`;
  }
  console.log('before'+ allMatches)
  checkMatches(allMatches);
  console.log('after'+ allMatches)
  
  removeMatches(allMatches);
  

  moveDown();

  updateScore(allMatches);
  allMatches.length = 0;
};

const setTimer = () => {
  if (timerThreeMin) {
    stopTimer();
  }

  beginTimeStamp = Math.floor(Date.now() / 1000);
  endTimeStamp = beginTimeStamp + 3 * 60;
  clearScore();
  createBoard();
  //updateBoard();
  timerThreeMin = setInterval(updateGame, 1000);
};

export { timerThreeMin, setTimer, stopTimer };
