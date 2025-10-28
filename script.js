"use strict";

//___________________________________________________________________
//------------------variable definition stage------------------------
//___________________________________________________________________
let player2CurrentScore = 0;
let player1CurrentScore = 0;
let totalScoreInitial1 = 0;
let totalScoreInitial2 = 0;
let totalScore1 = document.getElementById("score--0");
let totalScore2 = document.getElementById("score--1");
let currentScore1 = document.getElementById("current--0");
let currentScore2 = document.getElementById("current--1");
let player1field = document.querySelector(".player--0");
let player2field = document.querySelector(".player--1");
let image = document.querySelector(".dice");

//___________________________________________________________________
//------------------total score functions------------------------
//___________________________________________________________________

let totalScoreFunction1 = (scr1) => {
  totalScoreInitial1 += scr1;
  totalScore1.textContent = totalScoreInitial1;
};

let totalScoreFunction2 = (scr2) => {
  totalScoreInitial2 += scr2;
  totalScore2.textContent = totalScoreInitial2;
};
//___________________________________________________________________
//------------------current score function------------------------
//___________________________________________________________________

let currentScoreFunction1 = (num1) => {
  currentScore1.textContent = num1;
};

let currentScoreFunction2 = (num2) => {
  currentScore2.textContent = num2;
};

//_______________________________________________________________________
//------------------when we touch NEW GAME button------------------------
//_______________________________________________________________________

document.querySelector(".btn--new").addEventListener("click", function () {
  totalScoreInitial1 = 0;
  totalScoreFunction1(totalScoreInitial1);
  totalScoreInitial2 = 0;
  totalScoreFunction2(totalScoreInitial2);
  player1field.classList.add("player--active");
  player2field.classList.remove("player--active");
  currentScoreFunction1(0);
  currentScoreFunction2(0);
  player2CurrentScore = 0;
  player1CurrentScore = 0;
  image.classList.add("hidden");
  document.querySelector(".btn--roll").classList.remove("hidden");
  document.querySelector(".btn--hold").classList.remove("hidden");
  player1field.classList.remove("player--winner");
  player2field.classList.remove("player--winner");
});

//___________________________________________________________________
//------------------when we click HOLD btn---------------------------
//___________________________________________________________________

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (player1field.classList.contains("player--active")) {
    player1field.classList.remove("player--active");
    player2field.classList.add("player--active");
    totalScoreFunction1(player1CurrentScore);
    player1CurrentScore = 0;
    currentScoreFunction1(player1CurrentScore);
  } else {
    player1field.classList.add("player--active");
    player2field.classList.remove("player--active");
    totalScoreFunction2(player2CurrentScore);
    player2CurrentScore = 0;
    currentScoreFunction2(player2CurrentScore);
  }
  image.classList.add("hidden");
  checkWinner();
});

//_________________________________________________________________________
//       ------------------swaping palyers------------------------
//_________________________________________________________________________
function handleRollOne(
  activePlayerField,
  inactivePlayerField,
  setCurrentScore,
  setCurrentScoreValue
) {
  setCurrentScoreValue = 0;
  setCurrentScore(setCurrentScoreValue);
  activePlayerField.classList.remove("player--active");
  inactivePlayerField.classList.add("player--active");
  image.classList.add("hidden");
  return setCurrentScoreValue;
}

function handleRollNotOne(setCurrentScoreValue, randomNumber, setCurrentScore) {
  setCurrentScoreValue += randomNumber;
  setCurrentScore(setCurrentScoreValue);
  return setCurrentScoreValue;
}
//_________________________________________________________________________
//   ------------------winner player theme------------------------
//_________________________________________________________________________
let winnerTheme = (playerfield) => {
  playerfield.classList.add("player--winner");
  image.classList.add("hidden");
  document.querySelector(".btn--roll").classList.add("hidden");
  document.querySelector(".btn--hold").classList.add("hidden");
};
//_________________________________________________________________________
//------------------when you click ROLL DICE button------------------------
//_________________________________________________________________________

document.querySelector(".btn--roll").addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  image.src = `dice-${randomNumber}.png`;
  image.classList.remove("hidden");

  if (player1field.classList.contains("player--active")) {
    if (randomNumber === 1) {
      player1CurrentScore = handleRollOne(
        player1field,
        player2field,
        currentScoreFunction1,
        player1CurrentScore
      );
    } else {
      player1CurrentScore = handleRollNotOne(
        player1CurrentScore,
        randomNumber,
        currentScoreFunction1
      );
    }
  } else {
    if (randomNumber === 1) {
      player2CurrentScore = handleRollOne(
        player2field,
        player1field,
        currentScoreFunction2,
        player2CurrentScore
      );
    } else {
      player2CurrentScore = handleRollNotOne(
        player2CurrentScore,
        randomNumber,
        currentScoreFunction2
      );
    }
  }
  checkWinner();
});

//_________________________________________________________________________
//        ------------------WINNING CASE----------------------
//_________________________________________________________________________
function checkWinner() {
  if (totalScoreInitial1 >= 100 && totalScoreInitial2 < 100) {
    winnerTheme(player1field);
  } else if (totalScoreInitial2 >= 100 && totalScoreInitial1 < 100) {
    winnerTheme(player2field);
  }
}
