let playerOneName = document.getElementById("playerOneName");
let playerOneStartBtn = document.getElementById("playerOneStartBtn");
let errorOne = document.getElementById("errorOne");
let playerOneNameCard = document.getElementById("playerOneNameCard");

let playerOneTitle = document.getElementById("playerOneTitle");

playerOneStartBtn.addEventListener("click", function () {
  if (playerOneName.value == "") {
    errorOne.style.display = "flex";
    
  } else {
    playerOneNameCard.style.display = "none";
    playerOneNumCard.style.display = "block";
    errorOne.style.display = "none";
    playerOneTitle.innerText = playerOneName.value;

  }
});

// ==================

let playerOneNumCard = document.getElementById("playerOneNumCard");
let playerOneNumInput = document.getElementById("playerOneNumInput");
let letsPlayBtn = document.getElementById("letsPlayBtn");
let errorOneNum = document.getElementById("errorOneNum");

letsPlayBtn.addEventListener("click", function () {
  if (playerOneNumInput.value == "") {
    errorOneNum.style.display = "flex";
    
  } else {
    playerOneNumCard.style.display = "none";
    playerTwoNameCard.style.display = "block";
    errorOneNum.style.display = "none";

  }
});

// ==================

let playerTwoName = document.getElementById("playerTwoName");
let playerTwoStartBtn = document.getElementById("playerTwoStartBtn");
let errorTwo = document.getElementById("errorTwo");
let playerTwoNameCard = document.getElementById("playerTwoNameCard");

let playerTwoTitle = document.getElementById("playerTwoTitle");

playerTwoStartBtn.addEventListener("click", function () {
  if (playerTwoName.value == "") {
    errorTwo.style.display = "flex";
    
  } else {

    playerTwoNameCard.style.display = "none";
    playerTwoNumCard.style.display = "block";
    errorTwo.style.display = "none";
    playerTwoTitle.innerText = playerTwoName.value;

  }
});

// ==================

let playerTwoNumCard = document.getElementById("playerTwoNumCard");
let playerTwoNumInput = document.getElementById("playerTwoNumInput");
let guessBtn = document.getElementById("guessBtn");
let errorTwoNum = document.getElementById("errorTwoNum");
let gameOverCard = document.getElementById("gameOverCard");
let gameResult = document.getElementById("gameResult");


guessBtn.addEventListener("click", function () {
  if (playerTwoNumInput.value == "") {
    errorTwoNum.style.display = "flex";
    
  } else if( playerOneNumInput.value == playerTwoNumInput.value){
    playerTwoNumCard.style.display = "none";
    gameOverCard.style.display = "block";
    gameResult.innerText = playerTwoName.value.toUpperCase()+ ",You are win! ";
    errorTwoNum.style.display = "none";
  }
  else{
    playerTwoNumCard.style.display = "none";
    gameOverCard.style.display = "block";
    gameResult.innerText = playerOneName.value.toUpperCase()+ "won! Wrong Guess by "+ playerTwoName.value.toUpperCase()+".";
    errorTwoNum.style.display = "none";
  }
});