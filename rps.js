
/* set 3 possible choices for computer: Rock, Paper, Scissors; */
computerChoicePool = ["Rock", "Paper", "Scissors"] 

    /* Ask User for Input (Rock / Paper / Scissors */
let PlayerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors' ");

    /* Run getComputerChoice and compare it to UserChoice */
    /* Declare winner in a return statement according to outcome of comparison*/
let ComputerSelection = (getComputerChoice());

function playRound () {
    if (PlayerSelection === "Rock" && ComputerSelection === "Scissors" 
    || PlayerSelection === "Paper" && ComputerSelection === "Rock" 
    || PlayerSelection === "Scissors" && ComputerSelection === "Paper") {
        return Win();
    } else if (PlayerSelection === "Rock" && ComputerSelection === "Paper"
    || PlayerSelection === "Paper" && ComputerSelection === "Scissors"
    || PlayerSelection === "Scissors" && ComputerSelection === "Rock") {
        return Lost();
    } else if (PlayerSelection === ComputerSelection) {
        return Tie();
    }
}

    /* Create a function for Won and Lost and a function for Tie */
function Won() {
    return ("You Won! " + PlayerSelection +  " beats " + ComputerSelection);
}
function Lost() {
    return ("You Lost! " + ComputerSelection + " beats " + PlayerSelection);
}
function Tie() {
    return ("It's a Tie! " + PlayerSelection + " and " + ComputerSelection + " are equal.");
}

console.log(playRound(PlayerSelection, ComputerSelection));

/* create variable for computer choice; */
function getComputerChoice() {
    var ComputerChoice = Math.floor(Math.random() * computerChoicePool.length);
    return computerChoicePool[ComputerChoice];
    }