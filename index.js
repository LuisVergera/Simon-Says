const green = document.getElementById("0");
const yellow = document.getElementById("1");
const blue = document.getElementById("2");
const red = document.getElementById("3");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const panels = document.getElementsByClassName("panel");
let $score = document.getElementById("score");
const activeSequence = [green, yellow, red, blue];

let simonSequence = [];
let playerSequence = [];

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
  updateScore();
  addColour();
  handleNextTurn();
}

function addColour() {
  let randomSequence = Math.floor(Math.random() * 4);
  let activePanels = panels[randomSequence];
  simonSequence.push(activePanels.id);
}

function handleNextTurn() {
  disableClick();
  updateState("Simon turn", true);
  let i = 0;
  let intervalID = setInterval(function () {
    flash(panels[simonSequence[i]]);
    i++;
    if (i >= round) {
      clearInterval(intervalID);
      enableClick();
      updateState("Player's turn");
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
  updateState("Game Over!", true);
  resetGame();
  location.reload(true);
}

function updateScore(score) {
  $score.innerText = "Score " + simonSequence.length;
}

function updateState(estado, error = false) {
  const $estado = document.querySelector("#estado");
  $estado.textContent = estado;
  if (error) {
    $estado.classList.remove("alert-primary");
    $estado.classList.add("alert-danger");
  } else {
    $estado.classList.remove("alert-danger");
    $estado.classList.add("alert-primary");
  }
}
