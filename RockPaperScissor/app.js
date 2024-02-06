let userScore = 0;
let compScore = 0;

// const choices = document.querySelectorAll(".choice");

// const paper = document.getElementById("paper");
// const rock = document.getElementById("rock");
// const scissors = document.getElementById("scissors");

const choices = [paper, rock, scissors];


const msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const gameWin = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        console.log("It's a draw!");
        drawGame();
        return undefined;
    }

    if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return true; // User wins
    } else {
        return false; // User loses
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // return "scissors";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        const compChoice = genCompChoice();
        // console.log(compChoice);
        const userWin = gameWin(userChoice, compChoice);
        if (userWin !== undefined) { showWinner(userWin, userChoice, compChoice) };
    });
});

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move";
};

resetBtn.addEventListener("click", resetGame);