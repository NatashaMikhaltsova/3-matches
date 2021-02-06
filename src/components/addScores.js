import {sortedAccounts} from "../utils/getAccounts";

const addScores = async () => {
  const dataItems = await sortedAccounts();
  let tableView = '';

  dataItems.forEach(item => {
    tableView += `
    <div>
      <div>${item.place}</div>
      <div>${item.name}</div>
      <div>${item.score}</div>
    </div>
  `;
  
  });
  return tableView;
}

export {addScores};