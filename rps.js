
/* set 3 possible choices for computer: Rock, Paper, Scissors; */
computerChoicePool = [
    "Rock", "Paper", "Scissors"
    ]

/* create variable for computer choice; */
function getComputerChoice() {
    var ComputerSelection = Math.floor(Math.random() * computerChoicePool.length);
    return computerChoicePool[ComputerSelection];
    }

getComputerChoice(computerChoicePool)
console.log (getComputerChoice(computerChoicePool))

/* give player (User) 3 options to choose as well: Rock, Paper, Scissors;
check for equality;
If equal => Tie
If not equal check values:
    If Computer chose rock and player scissors:
        => "You lost! Rock beats Scissors."

    If Computer chose paper and player rock:
        => "You lost! Paper beats Rock."

    If Computer chose scissors and player paper:
        => "You lost! Scissors beat Paper."


    If Computer chose rock and player paper:
        => "You won! Paper beats Rock."

    If Computer chose Paper and player scissors:
        => "You won! Scissors beat Paper."

    If Computer chose Scissors and player rock:
        => "You won! Rock beats Scissors."
*/