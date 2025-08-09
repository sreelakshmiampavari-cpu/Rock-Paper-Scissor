let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");
const message = document.querySelector("#message");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const choices = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const drawGame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#2d2d2d";
};

const showWinner = (playerWins, playerChoice, computerChoice) => {
    if (playerWins) {
        playerScore++;
        playerScoreElement.innerText = playerScore;
        message.innerText = `You win! Your ${playerChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScoreElement.innerText = computerScore;
        message.innerText = `You lost. ${computerChoice} beats your ${playerChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    if (playerChoice === computerChoice) {
        drawGame();
    } else {
        let playerWins = true;
        if (playerChoice === "stone") {
            playerWins = computerChoice === "paper" ? false : true;
        } else if (playerChoice === "paper") {
            playerWins = computerChoice === "scissors" ? false : true;
        } else {
            playerWins = computerChoice === "stone" ? false : true;
        }
        showWinner(playerWins, playerChoice, computerChoice);
    }
};

options.forEach((option) => {
    option.addEventListener("click", () => {
        const playerChoice = option.getAttribute("id");
        playGame(playerChoice);
    });
});