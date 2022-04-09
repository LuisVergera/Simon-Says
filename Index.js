const green = document.querySelector("#0");
const yellow = document.querySelector("#1");
const red = document.querySelector("#2");
const blue = document.querySelector("#3");

const sequence = [green, yellow, red, blue];
const randomSequence = sequence[Math.floor(Math.random() * sequence.length)];

let simonSequence = [];
let playerSequence = [];

function flash(colour) {
  colour.classList.add("active");
  setTimeout(function () {
    colour.classList.remove("active");
  }, 250);
}

function flashRandomColour() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flash(randomSequence));
    }, 1500);
  });
}

function round() {}

function simonTurn() {
  playerSequence = [];
  compareSequenceArrays();
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

playerTurnHandler();

function compareSequenceArrays(playerSequence, simonSequence) {
  if (playerSequence != simonSequence) {
    gameover();
  }
}
