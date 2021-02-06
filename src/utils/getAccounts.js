const JSON_ACCOUNTS = "http://localhost:3006/accounts";

const getAccount = async () => {
  const data = await fetch(JSON_ACCOUNTS);
  return data.json();
};

const sortedAccounts = async (n = 10) => {
  const data = await getAccount();
  //sort by score
  let sortedData = data.sort((a, b) =>
    a.score > b.score ? -1 : b.score > a.score ? 1 : 0
  );

  //add Place field
  sortedData = sortedData.map((elem, index) => {
    elem["place"] = index + 1;

    return elem
  });

  return sortedData.slice(0, n);
};

const postAccount = async (info1, info2) => {
  const res = await fetch(JSON_ACCOUNTS, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: info1,
      score: info2,
    }),
  });

  const responseData = await res.json();
  return responseData;
};

export { sortedAccounts, postAccount };
