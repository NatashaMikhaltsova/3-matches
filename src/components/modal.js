const getModal = () => {
  const header = document.querySelector("header");
  const firstPage = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  modal.classList.add("show-modal-content");
  firstPage.classList.add("add-opacity");
  header.classList.add("add-opacity");
};

const startGame = (e) => {
  const header = document.querySelector("header");
  const firstPage = document.querySelector(".container");
  const gamePage = document.querySelector("#game");
  const modal = document.querySelector(".modal");

  e.preventDefault();
  modal.classList.remove("show-modal-content");
  firstPage.classList.remove("add-opacity");
  header.classList.remove("add-opacity");
  firstPage.classList.add("hide");
  gamePage.classList.remove("hide");
};

const closeModal = (e) => {
  const header = document.querySelector("header");
  const firstPage = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  if (
    modal &&
      modal.classList.contains("show-modal-content") &&
      e.target.id === "closeBtn" ||
    e.target.id === "modal1"
  ) {
    modal.classList.remove("show-modal-content");
    firstPage.classList.remove("add-opacity");
    header.classList.remove("add-opacity");
  }
};

export { getModal, startGame, closeModal };
