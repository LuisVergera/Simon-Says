const green = document.querySelector("#colour-green");
const yellow = document.querySelector("#colour-yellow");
const red = document.querySelector("#colour-red");
const blue = document.querySelector("#colour-blue");

const sequence = [green, yellow, red, blue];
const randomSequence = sequence[Math.floor(Math.random() * sequence.length)];

let simonSequence = [];
let playerSequence = [];

function flash(colour) {
  colour.classList.add("active");
}

function flashRandomColour() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flash(randomSequence));
    }, 1500);
  });
}

/*
function simonTurn() {
  let timesFlashed = 0;

  if (simonSequence === playerSequence) {
    for (let i = 1; i < 20; i++) {}
  }
}
*/

function playerTurnHandler() {
  document.getElementById("colour-green").onclick = function () {
    playerSequence.push(0);
  };

  document.getElementById("colour-yellow").onclick = function () {
    playerSequence.push(1);
  };

  document.getElementById("colour-red").onclick = function () {
    playerSequence.push(2);
  };

  document.getElementById("colour-blue").onclick = function () {
    playerSequence.push(3);
  };
}

playerTurnHandler();
