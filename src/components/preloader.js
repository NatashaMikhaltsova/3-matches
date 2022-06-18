const getPreloader = () => {
  const preloader = document.querySelector(".preloader-container");
  const rulesBlock = document.querySelector("#rules-block");
  if(preloader && rulesBlock) {
    preloader.classList.add("hide");
    rulesBlock.classList.remove("hide");
  }
}

export default getPreloader;