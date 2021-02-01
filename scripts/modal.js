let newGameBtn = document.querySelector("#newGame");
const submitForm = document.querySelector("#registration");
const header = document.querySelector("header");
const firstPage = document.querySelector(".container");
const gamePage = document.querySelector("#game");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#closeBtn");

const showModal = () => {
  modal.classList.add("show-modal-content");
  firstPage.classList.add("add-opacity");
  header.classList.add("add-opacity");
  
};

const startGame = (e) => {
  e.preventDefault();
  modal.classList.remove("show-modal-content");
  firstPage.classList.remove("add-opacity");
  header.classList.remove("add-opacity");
  firstPage.classList.add("hide");
  gamePage.classList.remove("hide");
};

const closeModal = (e) => {
  if (
    (modal.classList.contains("show-modal-content") &&
      e.target.id === "closeBtn") || 
    e.target.id === "modal1") {
    modal.classList.remove("show-modal-content");
    firstPage.classList.remove("add-opacity");
    header.classList.remove("add-opacity");
  }
};

submitForm.addEventListener("submit", startGame);

document.querySelector("body").addEventListener("click", closeModal);
newGameBtn.addEventListener("click", showModal);

