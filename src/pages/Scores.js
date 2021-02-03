 import {addScores} from "../components/addScores";


const Scores = async () => {
  const scoresTable = await addScores();
  const view = `
    <div class="container">
      <div class="scoresTable">
        <div>
          <div>Name</div>
          <div>Scores</div>
        </div>
         ${scoresTable}
      </div>
    </div>
`;
  return view;
}

export default Scores; 
