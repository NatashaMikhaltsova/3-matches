const JSON_ACCOUNTS = 'http://localhost:3006/accounts';

const getData = async (url) => {
  const res = await fetch(url);
  return res.json();
}

const getAccount = async () => {
  const data = await getData('http://localhost:3006/accounts');
  return data

  /* document.querySelector('#content').innerHTML = `${data.name} ${data.email}`;
  console.log(data.accounts[0].name); */
}

getAccount()
// POST
const postAccount = async (info1, info2) => {
  const res = await fetch('http://localhost:3006/accounts/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: info1,
      email: info2
    })
  });

  const responseData = await res.json();
  console.log(responseData);
}

/* document.querySelector('#post-data').addEventListener('submit', () => {
  let name = document.querySelector('#icon_prefix').value;
  let email = document.querySelector('#icon_telephone').value;

  //putAccount(name, email);
  //deleteAccount();
  //postAccount(name, email);
}) */

export {getAccount, postAccount}