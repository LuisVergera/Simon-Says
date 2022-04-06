const green = document.querySelector("#colour-green");
const yellow = document.querySelector("#colour-yellow");
const red = document.querySelector("#colour-red");
const blue = document.querySelector("#colour-blue");

const sequence = [green, yellow, red, blue];
const randomSequence = sequence[Math.floor(Math.random() * sequence.length)];

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
