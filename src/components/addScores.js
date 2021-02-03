import {getAccount} from "../utils/getAccounts";

const addScores = async () => {
  const dataItems = await getAccount();
  console.log(dataItems)
  let tableView = '';

  dataItems.forEach(item => {
    tableView += `
    <div>
      <div>${item.name}</div>
      <div>${item.score}</div>
    </div>
  `;
  
  });
  return tableView;
}

export {addScores};