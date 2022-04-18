const green = document.getElementById("0");
const yellow = document.getElementById("1");
const blue = document.getElementById("2");
const red = document.getElementById("3");

const panels = document.getElementsByClassName("panel");
const buttons = Array.from(panels);

const randomSequence = Math.floor(Math.random() * 4);
const activeSequence = [green, yellow, red, blue];

var simonSequence = [];
var playerSequence = [];

let round = 0;

function beginGame() {
  simonSequence = [];
  //createSimonSequence();
  simonTurn();
  //playerTurn();
}

function flash(colour) {
  colour.classList.add("active");
  setTimeout(function () {
    colour.classList.remove("active");
  }, 250);
}

function createSimonSequence() {
  for (let i = 0; i < 20; i++) {
    simonSequence.push(Math.floor(Math.random() * 4));
  }
}

//function round() {}

function simonTurn() {
  playerSequence = [];
  createSimonSequence();
  //round += 1;
  simonTurnHandler();
}

function getColour() {
  let randomSequence = Math.floor(Math.random() * 4);
  let activePanels = panels[randomSequence];
  simonSequence.push(activePanels.id);
}

function simonTurnHandler() {
  let i = 0;
  let intervalID = setInterval(function () {
    flash(panels[[simonSequence[i]]]);
    i++;
    if (i >= round) {
      clearInterval(intervalID);
      playerTurn();
      compareSequenceArrays();
      //enableClick();
    }
  }, 800);
}

function playerTurn() {
  playerTurnHandler();
  compareSequenceArrays();
  round += 1;
}

function playerTurnHandler() {
  document.getElementById("0").onclick = function () {
    playerSequence.push(0);
  };

  document.getElementById("1").onclick = function () {
    playerSequence.push(1);
  };

  document.getElementById("2").onclick = function () {
    playerSequence.push(2);
  };

  document.getElementById("3").onclick = function () {
    playerSequence.push(3);
  };
}

//playerTurnHandler();

function compareSequenceArrays() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (simonSequence[i] === playerSequence[i]) {
      simonTurn();
    } else {
      console.log("game over");
    }
  }
}
//compareSequenceArrays();

function enableClick() {
  green.onclick = playerTurn;
  yellow.onclick = playerTurn;
  blue.onclick = playerTurn;
  red.onclick = playerTurn;
}
