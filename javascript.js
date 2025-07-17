const computerChoiceDisplay = document.querySelector(".computer-choice");
const userChoiceDisplay = document.querySelector(".user-choice");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resetBUtton = document.querySelector(".reset-button");

const computerScoreDisplay = document.querySelector(".computer-score");
const userScoreDisplay = document.querySelector(".user-score");

let userScore = 0;
let computerScore = 0;

function displayScore() {
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
}



function getComputerChoice() {
    let val = 3 * Math.random();
    if (val >= 2) {
        return "Rock"
    }
    if (val >= 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

rockButton.addEventListener("click", function() {
    displayResults("Rock");
});
paperButton.addEventListener("click", function() {
    displayResults("Paper");
});
scissorsButton.addEventListener("click", function() {
    displayResults("Scissors");
});
resetBUtton.addEventListener("click", reset);


function displayResults(userChoice) {
    let computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    userChoiceDisplay.textContent = userChoice;

    if (userChoice == "Rock") {
        if (computerChoice == "Paper") {
            computerScore ++;
        }
        else if (computerChoice == "Scissors") {
            userScore ++;
        }
    }

    if (userChoice == "Paper") {
        if (computerChoice == "Rock")  {
            userScore ++;
        }
        else if (computerChoice == "Scissors") {
            computerScore ++;
        }
    }

    if (userChoice == "Scissors") {
        if (computerChoice == "Rock")  {
            computerScore ++;
        }
        else if (computerChoice == "Paper") {
            userScore ++;
        }
    }
    displayScore();
}

function reset() {
    computerChoiceDisplay.textContent = "";
    userChoiceDisplay.textContent = "";
    userScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
}








