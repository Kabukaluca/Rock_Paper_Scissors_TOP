
//set 3 possible choices for computer: Rock, Paper, Scissors;
computerChoicePool = ["Rock", "Paper", "Scissors"] 


//Add 'Game - Function'
function game() {
    //create gameCounter
    //loop playRound 5x
    //after each 'playRound' increment 'gameCounter' of Winner by +1
    //after 5 rounds end 'playRound' -loop
    //declare the Winner (e.g. "It's 3:2, You won!")

}


/* function getPlayerChoice(){
    var playerChoice = prompt ("Choose 'Rock', 'Paper' or 'Scissors' ")
} */


//Ask User for Input (Rock / Paper / Scissors
//Make Input case Insensitive 
let playerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors' ");
let PlayerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

//Run getComputerChoice and compare it to UserChoice 
//Declare winner in a return statement according to outcome of comparison
let ComputerSelection = (getComputerChoice());

function playRound () {
    if (PlayerSelection === "Rock" && ComputerSelection === "Scissors" 
    || PlayerSelection === "Paper" && ComputerSelection === "Rock" 
    || PlayerSelection === "Scissors" && ComputerSelection === "Paper") {
        return Won();
    } else if (PlayerSelection === "Rock" && ComputerSelection === "Paper"
    || PlayerSelection === "Paper" && ComputerSelection === "Scissors"
    || PlayerSelection === "Scissors" && ComputerSelection === "Rock") {
        return Lost();
    } else if (PlayerSelection === ComputerSelection) {
        return Tie();
    }
}

//Create a function for Won and Lost and a function for Tie
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

//create variable for computer choice
function getComputerChoice() {
    var ComputerChoice = Math.floor(Math.random() * computerChoicePool.length);
    return computerChoicePool[ComputerChoice];
    }
