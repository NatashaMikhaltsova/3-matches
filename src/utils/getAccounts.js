const JSON_ACCOUNTS = 'http://localhost:3006/accounts';

const getAccount = async () => {
  const data = await fetch(JSON_ACCOUNTS);
  return data.json();
}

const postAccount = async (info1, info2) => {
  const res = await fetch(JSON_ACCOUNTS, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: info1,
      score: info2
    })
  });

  const responseData = await res.json();
  return responseData;
}

export {getAccount, postAccount}