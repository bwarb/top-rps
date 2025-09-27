//initialize global variables for human score and computer score



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

//Write logic to get human choice

function getHumanChoice() {
    let choice = window.prompt("Choice:");
    return choice;
}

//create function that initiates a single round



function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("tie!");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("you win! rock beats scissors.");
            humanScore++;
        }
        else {
            console.log("you lose! paper beats rock");
            computerScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("you win! paper beats rock.");
            humanScore++;
        }
        else {
            console.log("you lose! scissors beats paper");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("you win! scissors beats paper.");
            humanScore++;
        }
        else {
            console.log("you lose! rock beats scissors");
            computerScore++;
        }
    }
}    
    for (i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Computer Score: " + computerScore + " Human Score: " + humanScore);
    }
}
playGame(5);