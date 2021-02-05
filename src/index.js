import {getContent} from "./actions";
import {stopTimer} from "./components/timer"

//Base layout
document.body.innerHTML = `
  <main>
    <div class="header" id="header"></div>
    <div id="content"></div>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Authorization</h4>
        <form id="registration">
        <div>
          <label for="regName">Enter your name:</label>
          <input type="text" id="regName" name="regName" required />
          </div>
          <div class="modal-footer">
            <input type="submit" class="btn btn-outline-danger" value="Play!"/>
            <input type="button" class="btn btn-outline-danger" id="closeBtn" value="Cancel"/>
          </div>
        </form>
      </div>
    </div>
  </main>
`;

window.addEventListener("load", getContent);
window.addEventListener("hashchange", () => {
  //stopTimer();
  getContent();
  
});