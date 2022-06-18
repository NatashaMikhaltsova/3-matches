const getResolveRoutes = (route) => {
  if(route.length<=3) {
    let validationRoute = route === "/" ? route : "/:id";
    return validationRoute
  }
  return `/${route}`;
}

export default getResolveRoutes;