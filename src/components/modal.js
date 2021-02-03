const warning = (selector, id, text) => {
  let block = document.getElementById(selector);
  let parentBlock = block.closest('div');

  let model = document.createElement('div');
  model.id = id;
  model.innerText = text;

  parentBlock.insertBefore(model, block);
}

const getModal = () => {
  const header = document.querySelector("header");
  const page = document.querySelector(".container");
  const modal = document.querySelector(".modal");
  modal.classList.add("show-modal-content");
  page.classList.add("add-opacity");
  header.classList.add("add-opacity");
};

const startGame = (e) => {
  const header = document.querySelector("header");
  const page = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  e.preventDefault();
  let userName = document.querySelector("#regName");
  if(!userName.value.trim() && userName.previousSibling.id !== 'red-color') {
    warning(userName.id,'red-color', 'Введите данные!')
  } 
  if(userName.value.trim() && userName.previousSibling.id === 'red-color') {
    userName.previousSibling.remove();
    modal.classList.remove("show-modal-content");
    page.classList.remove("add-opacity");
    header.classList.remove("add-opacity");
  }
  if(userName.value.trim()) {
    modal.classList.remove("show-modal-content");
    page.classList.remove("add-opacity");
    header.classList.remove("add-opacity");
  }
  document.querySelector("#regName").value = '';
  return userName;
  
};

const closeModal = (e) => {
  const header = document.querySelector("header");
  const page = document.querySelector(".container");
  const modal = document.querySelector(".modal");

  if (
    modal &&
      modal.classList.contains("show-modal-content") &&
      e.target.id === "closeBtn" ||
    e.target.id === "modal1"
  ) {
    modal.classList.remove("show-modal-content");
    page.classList.remove("add-opacity");
    header.classList.remove("add-opacity");
  }
};

export { getModal, startGame, closeModal };
