const warning = (selector, id, text) => {
  let block = document.getElementById(selector);
  let parentBlock = block.closest("div");

  let model = document.createElement("div");
  model.id = id;
  model.innerText = text;

  parentBlock.insertBefore(model, block);
};

const getModal = (e) => {
  const header = document.querySelector("header");
  const page = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  e.preventDefault();
  e.stopImmediatePropagation();
  modal.classList.add("show-modal-content");
  page.classList.add("add-opacity");
  header.classList.add("add-opacity");
};

const hideModal = () => {
  const header = document.querySelector("header");
  const page = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  modal.classList.remove("show-modal-content");
  page.classList.remove("add-opacity");
  header.classList.remove("add-opacity");
};

const startGame = (e) => {
  let regNameSelector = document.querySelector("#regName");
  let regNameValue = document.querySelector("#regName").value.trim();

  if (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  if (regNameSelector) {
    if (!regNameValue && regNameSelector.previousSibling.id !== "red-color") {
      warning(regNameSelector.id, "red-color", "Please, use alphanumeric symbols!");
    } else if (regNameValue && regNameSelector.previousSibling.id !== "red-color") {
      hideModal();
      window.location.hash = "/game";
    } else if (regNameValue && regNameSelector.previousSibling.id === "red-color") {
      regNameSelector.previousSibling.remove();
      hideModal();
      window.location.hash = "/game";
    }
    return regNameValue;
  }
};

const closeModal = (e) => {
  const modal = document.querySelector(".modal");

  e.preventDefault();
  e.stopImmediatePropagation();
  
  if (modal && modal.classList.contains("show-modal-content") &&
    e.target.id === "closeBtn"
  ) {
    hideModal();
  }
};

export { getModal, startGame, closeModal };
