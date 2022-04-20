const green = document.getElementById("0");
const yellow = document.getElementById("1");
const blue = document.getElementById("2");
const red = document.getElementById("3");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const panels = document.getElementsByClassName("panel");
let $score = document.getElementById("score");
const randomSequence = Math.floor(Math.random() * 4);
const activeSequence = [green, yellow, red, blue];

var simonSequence = [];
var playerSequence = [];

let round = 0;

document.querySelector("#score").innerText = simonSequence.length;
startButton.onclick = beginGame;

function beginGame() {
  simonSequence = [];
  simonTurn();
}

function flash(panel) {
  panel.classList.add("active");
  setTimeout(function () {
    panel.classList.remove("active");
  }, 250);
}

function simonTurn() {
  playerSequence = [];
  round += 1;
  score();
  getColour();
  simonTurnHandler();
}

function getColour() {
  let randomSequence = Math.floor(Math.random() * 4);
  let activePanels = panels[randomSequence];
  simonSequence.push(activePanels.id);
}

function simonTurnHandler() {
  disableClick();
  let i = 0;
  let intervalID = setInterval(function () {
    flash(panels[simonSequence[i]]);
    i++;
    if (i >= round) {
      clearInterval(intervalID);
      enableClick();
    }
  }, 1000);
}

function playerTurn() {
  flash(this);
  playerSequence.push(this.id);
  compareSequenceArrays();
}

function compareSequenceArrays() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (simonSequence[i] != playerSequence[i]) {
      gameOver();
      return;
    }
  }
  if (playerSequence.length == simonSequence.length) {
    simonTurn();
  }
}

function enableClick() {
  green.onclick = playerTurn;
  yellow.onclick = playerTurn;
  blue.onclick = playerTurn;
  red.onclick = playerTurn;
}

function disableClick() {
  green.onclick = null;
  yellow.onclick = null;
  blue.onclick = null;
  red.onclick = null;
}

function resetGame() {
  simonSequence = [];
  playerSequence = [];
  round = 0;
}

function gameOver() {
  alert("GAME OVER");
  resetGame();
  location.reload(true);
}

function score() {
  $score.innerText = "Score " + simonSequence.length;
}
