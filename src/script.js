//  Select DOM elements
const choices = document.querySelectorAll(".choice");
const youDisplay = document.getElementById("youDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const resetBtn = document.getElementById("reset");
const yourScoreEl = document.getElementById("yourScore");
const compScoreEl = document.getElementById("compScore");

//  Game State
let yourScore = 0;
let compScore = 0;

//  Choices
const options = ["rock", "paper", "scissor"];

//  Event listeners for user choice
choices.forEach((choice) =>
  choice.addEventListener("click", () => handleUserChoice(choice.id))
);

//  Generate random computer choice
const getComputerChoice = () =>
  options[Math.floor(Math.random() * options.length)];

//  Handle game play
function handleUserChoice(yourChoice) {
  const computerChoice = getComputerChoice();

  // Display choices
  youDisplay.textContent = `You: ${yourChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;

  // Determine result
  if (yourChoice === computerChoice) return drawGame();

  const youWin =
    (yourChoice === "rock" && computerChoice === "scissor") ||
    (yourChoice === "paper" && computerChoice === "rock") ||
    (yourChoice === "scissor" && computerChoice === "paper");

  showResult(youWin);
}

//  Draw case
function drawGame() {
  updateResult("It's a Draw! 🤝", "rgba(90, 7, 120, 1)");
}

// Show result
function showResult(youWin) {
  if (youWin) {
    yourScore++;
    updateResult("You Win! 🎉", "green");
  } else {
    compScore++;
    updateResult("You Lose! 😢", "red");
  }

  // Update scores
  yourScoreEl.textContent = yourScore;
  compScoreEl.textContent = compScore;
}

//  Update result display
function updateResult(message, bgColor) {
  resultDisplay.textContent = message;
  resultDisplay.style.backgroundColor = bgColor;
}

//  Reset game
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  yourScore = 0;
  compScore = 0;

  [yourScoreEl.textContent, compScoreEl.textContent] = [0, 0];
  youDisplay.textContent = "You:";
  computerDisplay.textContent = "Computer:";
  updateResult("Play your move!", "rgb(42, 5, 153)");
}
