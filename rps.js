
/* set 3 possible choices for computer: Rock, Paper, Scissors; */
computerChoicePool = [
    "Rock", "Paper", "Scissors"
    ]


/* Play one round of R-P-S */
    /* Ask User for Input (Rock / Paper / Scissors */
    /* Store User Choice in a Var */
    /* Run getComputerChoice and compare it to UserChoice */
    /* Declare winner in a return statement according to outcome of comparison*/
let PlayerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors' ");
let ComputerSelection = (getComputerChoice());

function check () {
    if (PlayerSelection === "Rock" && ComputerSelection === "Scissors" 
    || PlayerSelection === "Paper" && ComputerSelection === "Rock" 
    || PlayerSelection === "Scissors" && ComputerSelection === "Paper") {
        return Win();
    } else if (PlayerSelection === "Rock" && ComputerSelection === "Paper"
    || PlayerSelection === "Paper" && ComputerSelection === "Scissors"
    || PlayerSelection === "Scissors" && ComputerSelection === "Rock") {
        return Lost();
    }

    else if (PlayerSelection === ComputerSelection) {
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

/* create variable for computer choice; */
function getComputerChoice() {
    var ComputerChoice = Math.floor(Math.random() * computerChoicePool.length);
    return computerChoicePool[ComputerChoice];
    }
console.log(getComputerChoice())

/* give player (User) 3 options to choose as well: Rock, Paper, Scissors;
check for equality;
If equal => Tie
If not equal check values:
    