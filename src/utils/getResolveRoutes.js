const getResolveRoutes = (route) => {
  if(route.length<=5) {
    let validationRoute = route === "/" ? route : "/:id";
    return validationRoute
  }
  return `/${route}`;
}

export default getResolveRoutes;