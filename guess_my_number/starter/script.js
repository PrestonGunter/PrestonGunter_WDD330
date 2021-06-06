"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🥳 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 14;

// document.querySelector(".guess").value = 45;
// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no number entered
  if (guess === 0) {
    displayMessage("😠 Please Enter a Number");
  } else {
    if (score > 1) {
      // When the player wins
      if (guess === number) {
        displayMessage("🥳 Correct Number!!");

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        document.querySelector(".number").textContent = number;

        if (score > highScore) {
          highScore = score;
          document.querySelector(".highscore").textContent = highScore;
        }
      }
      // When guess is wrong
      else if (guess !== number) {
        displayMessage(guess > number ? "⬆️ Too High!" : "⬇️ Too Low!")
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
    // When the player loses the game
    else {
      displayMessage("😵 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;

  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  number = Math.trunc(Math.random() * 20) + 1;
});
