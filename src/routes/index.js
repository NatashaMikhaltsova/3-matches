import Home from "../pages/Home";
import Scores from "../pages/Scores";
import Game from "../pages/Game";
import Header from "../template/Header";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";

const routes = {
  "/": Home,
  "/scores": Scores,
  "/game": Game
}

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = Header();
  let hash = getHash();
  let route = await getResolveRoutes(hash);
  let render = routes[route] ? routes[route] : ErrorNotFound;
  content.innerHTML = await render();
}

export default router;