
game();
//set 3 possible choices for computer: Rock, Paper, Scissors;

//Ask User for Input (Rock / Paper / Scissors
//Make Input case Insensitive 

//Run getComputerChoice and compare it to UserChoice 
//Declare winner in a return statement according to outcome of comparison

//create game Counter with 2 Variables (Player; Computer)
    //Everytime Player wins increment 'Player' +1
    //Everytime Computer wins, increment 'Computer' +1
    //Everytime it's a tie, the numbers stay the same

    
//Add 'game - Function'
function game () {
    var playerCount = 0
    var computerCount = 0

for (let gameRound = 1; gameRound <= 5; gameRound++) {
    console.log("Round: " + gameRound)

    computerChoicePool = ["Rock", "Paper", "Scissors"] 

    var getPlayerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors' ");
    let PlayerSelection = getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1).toLowerCase();

    let ComputerSelection = (getComputerChoice());

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
    
        //Create a function for Won and Lost and a function for Tie
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
}