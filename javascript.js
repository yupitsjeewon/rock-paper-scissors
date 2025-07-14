console.log("hello");
function getComputerChoice() {
    let val = 3 * Math.random();
    if (val >= 2) {
        return "rock";
    }
    if (val >= 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors");
}

let computerScore = 0;
let humanScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    let tie = "It's a tie!"
    if (humanChoice == "rock") {
        if (computerChoice == "rock")  {
            return tie;
        }
        else if (computerChoice == "paper") {
            computerScore ++;
            return "You lost to paper!";
        }
        else if (computerChoice == "scissors") {
            humanScore ++;
            return "You beat scissors!";
        }
    }

    if (humanChoice == "paper") {
        if (computerChoice == "rock")  {
            humanScore ++;
            return "You beat rock!";
        }
        else if (computerChoice == "paper") {
            return tie;
        }
        else if (computerChoice == "scissors") {
            computerScore ++;
            return "You lost to scissors!";
        }
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "rock")  {
            computerScore ++;
            return "You lost to rock!";
        }
        else if (computerChoice == "paper") {
            humanScore ++;
            return "You beat to paper!";
        }
        else if (computerChoice == "scissors") {
            return tie;
        }
    }

}

for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

console.log("Your score: " + humanScore);
console.log("Computer score: " + computerScore);

