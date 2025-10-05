//initialize global variables for human score and computer score
let humanScore = 0;
let computerScore = 0;

// add event listeners for r/p/s buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

const resultsDiv = document.querySelector(".results");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

//create function that randomly returns r/p/s
//math.random method returns number >=0 and < 1
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <0.33) {
        return "rock";
    }
    else if (randomNumber <0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}




function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = ("tie!");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            resultsDiv.textContent = ("you win! rock beats scissors.");
            humanScore++;
        }
        else {
            resultsDiv.textContent = ("you lose! paper beats rock");
            computerScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            resultsDiv.textContent = ("you win! paper beats rock.");
            humanScore++;
        }
        else {
            resultsDiv.textContent = ("you lose! scissors beats paper");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            resultsDiv.textContent = ("you win! scissors beats paper.");
            humanScore++;
        }
        else {
            resultsDiv.textContent = ("you lose! rock beats scissors");
            computerScore++;
        }
    }
    playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        playerScoreDisplay.textContent = "";
        computerScoreDisplay.textContent = "";
        if(humanScore === 5) {
            resultsDiv.textContent = "You win!";
        }
        else {
            resultsDiv.textContent = "Computer wins!"
        }
        computerScore = 0;
        humanScore = 0;
    }
}    
