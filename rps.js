// Global variables
let playerCount = 0;
let computerCount = 0;
let roundCount = 0;

// DOM elements
const resultContainer = document.querySelector("#resultContainer");
const resultText = document.createElement("p");
resultContainer.appendChild(resultText);

// Button event listeners
const rckBtn = document.querySelector("#btn-rock");
rckBtn.addEventListener("click", () => playRound("Rock"));

const pprBtn = document.querySelector("#btn-paper");
pprBtn.addEventListener("click", () => playRound("Paper"));

const srsBtn = document.querySelector("#btn-scissors");
srsBtn.addEventListener("click", () => playRound("Scissors"));

// Play a single round of RPS
function playRound(playerSelection) {
  roundCount++;
  const computerSelection = getComputerChoice();
  const outcome = getRoundOutcome(playerSelection, computerSelection);

  if (outcome === "win") {
    playerCount++;
    displayResult(`You Won! ${playerSelection} beats ${computerSelection}!`);
  } else if (outcome === "loss") {
    computerCount++;
    displayResult(`You Lost! ${computerSelection} beats ${playerSelection}!`);
  } else {
    displayResult(`It's a Tie! ${playerSelection} and ${computerSelection} are equal.`);
  }

  if (playerCount === 5 || computerCount === 5) {
    displayResult(declareFinalScore(), "finalMessage");
    roundCount = 0;
    playerCount = 0;
    computerCount = 0;
  }

  displayPlayerScore();
  displayComputerScore();
}

// Get computer choice
function getComputerChoice() {
  const computerChoicePool = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoicePool.length);
  return computerChoicePool[randomIndex];
}

// Get round outcome
function getRoundOutcome(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "win";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return "loss";
  } else {
    return "tie";
  }
}

// Display outome message
function displayResult(message, outcome) {
  resultText.innerHTML = message;
  resultText.className = outcome;
  displayPlayerScore();
  displayComputerScore();
}

// Display scores
function displayPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = statsPlayer();
}

function displayComputerScore() {
    let computerScoreBox = document.querySelector("#computer-score")
    computerScoreBox.textContent = statsComputer();
}

// Get game statistics
function statsPlayer() {return `${playerCount}`}
function statsComputer() {return `${computerCount}`}

// Declare final score
const declareFinalScore = () =>
  playerCount > computerCount ? wonGame() : playerCount < computerCount ? lostGame() : tieGame();

// Final outcome messages
const wonGame = () => `Congratulations! You Won the game<br>`;
const lostGame = () => `You lost the game! Better luck next time!<br>`;
const tieGame = () => `It's a Tie! At least as good as the machine!<br>`;

// Add CSS classes
rckBtn.classList.add("buttons");
pprBtn.classList.add("buttons");
srsBtn.classList.add("buttons");