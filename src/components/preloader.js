const getPreloader = () => {
  const preloader = document.querySelector(".preloader-container");
  const gameElement = document.querySelector("#game");
  if(preloader && gameElement) {
    preloader.classList.add("hide");
    gameElement.classList.remove("hide");
  }
}

export default getPreloader;