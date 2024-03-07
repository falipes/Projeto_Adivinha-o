const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const form = document.querySelector('form');
const inputNumber = form.querySelector('#inputNumber');
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();

  if (isGuessCorrect(Number(inputNumber.value))) {
    handleCorrectGuess();
  }

  xAttempts++;
}

function isGuessCorrect(guess) {
  return guess === randomNumber;
}

function handleCorrectGuess() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");

  document.querySelector(".screen2 h2").textContent = `Acertou em ${xAttempts} tentativas`;
}

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");

  xAttempts = 1;
});