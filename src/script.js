const choices = document.querySelectorAll('.choice');
const youDisplay = document.getElementById('youDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const reset = document.getElementById('reset');

const yourScoreP = document.querySelector('#yourScore');
const compScoreP = document.querySelector('#compScore');

let yourScore = 0;
let compScore = 0;

/**use addeventlistener for choose particular choice in given 3 choices
 * and print your choice which one is you choose
 */
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const yourChoice = choice.getAttribute('id');
    playGame(yourChoice);
  });
});

// for generate computer choice
const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissor'];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

/**
 * check computer choice and your choice
 * display  computer choice and your choice
 * check condition you win or lost or draw game
 */
const playGame = (yourChoice) => {
  youDisplay.innerText = `You: ${yourChoice}`;
  const computerChoice = getComputerChoice();
  computerDisplay.innerText = `Computer: ${computerChoice}`;

  if (yourChoice === computerChoice) {
    drawGame();
  } else {
    let youWin = true;
    if (yourChoice === 'rock') {
      // scissors, paper
      youWin = computerChoice === 'paper' ? false : true;
    } else if (yourChoice === 'paper') {
      // rock, scissors
      youWin = computerChoice === 'scissor' ? false : true;
    } else {
      // rock, paper
      youWin = computerChoice === 'rock' ? false : true;
    }
    showWinner(youWin);
  }
};

//  for Draw Game show draw text with bg color
const drawGame = () => {
  resultDisplay.innerText = 'Game draw, play again';
  resultDisplay.style.backgroundColor = 'rgb(45, 2, 60)';
};
/**
 * show you win or lost with bg color changing
 * if you win bg color is green and you lost bg color is red
 * showing the winning score of computer and you
 */
const showWinner = (youWin) => {
  if (youWin) {
    yourScore++;
    yourScoreP.innerText = yourScore;

    resultDisplay.innerText = 'you win!';
    resultDisplay.style.backgroundColor = 'green';
  } else {
    compScore++;
    compScoreP.innerText = compScore;
    resultDisplay.innerText = 'you lose!';
    resultDisplay.style.backgroundColor = 'red';
  }
};
// reset button

reset.addEventListener('click', () => {
  yourScore = 0;
  compScore = 0;
  yourScoreP.innerHTML = yourScore;
  compScoreP.innerHTML = compScore;
  youDisplay.innerText = 'You:';
  computerDisplay.innerText = 'Computer:';
  resultDisplay.innerText = 'Play your move';
  resultDisplay.style.backgroundColor = 'rgb(19, 2, 60)';
});
