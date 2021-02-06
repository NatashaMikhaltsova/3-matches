import {
  squares,
  allMatches,
  checkMatches,
  checkMatchesExists,
  moveDown,
  updateScore,
  removeMatches,
  updateBoard,
  clearScore
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
    postAccount(userName.innerText.trim(), parseInt(userScore.innerText));
  }
};

const updateGame = () => {
  const timerSelector = document.querySelector("#timer");

  if (!checkMatchesExists(squares)) {
    alert("No moves!");
    updateBoard();
  }

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

  checkMatches(allMatches);
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
  endTimeStamp = beginTimeStamp + 60;
  clearScore();
  timerThreeMin = setInterval(updateGame, 1000);
};

export { setTimer, stopTimer };
