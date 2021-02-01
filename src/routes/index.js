import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Header from "../template/Header";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";

const routes = {
  "/": Home,
  "/contact": Contact
}

const router =  () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = Header();
  let hash = getHash();
  let route = getResolveRoutes(hash);
  let render = routes[route] ? routes[route] : ErrorNotFound;
  content.innerHTML = render();
}

export default router;