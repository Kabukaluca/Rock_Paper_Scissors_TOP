game();

//plays 5 rounds of RPS and declares a Winner
function game () {
    var playerCount = 0
    var computerCount = 0

for (let gameRound = 1; gameRound <= 5; gameRound++) {
    console.log("Round: " + gameRound)

    computerChoicePool = ["Rock", "Paper", "Scissors"] 

//get PlayerInput + make case-insensitive
    var getPlayerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors' ");
    var PlayerSelection = getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1).toLowerCase();

    let ComputerSelection = (getComputerChoice());

//play a single round of RPS
    function playRound () {
        if (PlayerSelection === "Rock" && ComputerSelection === "Scissors" 
        || PlayerSelection === "Paper" && ComputerSelection === "Rock" 
        || PlayerSelection === "Scissors" && ComputerSelection === "Paper") {
            ++playerCount; 
            return Won() + stats(); 
        } else if (PlayerSelection === "Rock" && ComputerSelection === "Paper"
        || PlayerSelection === "Paper" && ComputerSelection === "Scissors"
        || PlayerSelection === "Scissors" && ComputerSelection === "Rock") {
            ++computerCount;
            return Lost() + stats();
        } else if (PlayerSelection === ComputerSelection) {
            return Tie() + stats();
        }
    }
    console.log(playRound(PlayerSelection, ComputerSelection));

    //create variable for computer choice
    function getComputerChoice() {
        var ComputerChoice = Math.floor(Math.random() * computerChoicePool.length);
        return computerChoicePool[ComputerChoice];
        }
    
        //Create  messages for Won, Lost and Tie
        function Won() {
            return ("You Won! " + PlayerSelection +  " beats " + ComputerSelection + "!   "); 
        }
        function Lost() {
            return ("You Lost! " + ComputerSelection + " beats " + PlayerSelection + "!   ")
        }
        function Tie() {
            return ("It's a Tie! " + PlayerSelection + " and " + ComputerSelection + " are equal.   ");
        }
        function stats(){
            return (" Player: " + playerCount + "   |  Computer: " + computerCount);
        }
    }

//function to call final Winner
    function finalScore() {
        if (playerCount > computerCount) {
            return gameWon();
        } else if (playerCount < computerCount) {
            return gameLost();
        } else {
            return gameTie();
        }
    }

//create messages for final outcome
    function gameWon() {
            return ("Congratulations! You Won the game " + playerCount + ":" + computerCount + "!");
        }
    function gameLost() {
            return ("You lost the game! " + playerCount + ":" + computerCount + " Better luck next time!");
        }
    function gameTie() {
            return ("It's a Tie! But at least you are as good as the Computer!");
        } 

console.log(finalScore());
}