const getHash = () => {
  return location.hash.slice(1).toLowerCase().split("/") [1] || "/";
}

export default getHash;