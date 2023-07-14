// ***************** GLOBALS ******************************

let userGuess;
let cpuGuess;
let userScore = 0;
let cpuScore = 0;
let roundPlaying = true;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttonCntr = document.querySelector(".game-area");
const scoreBoard = document.createElement("div");
const playerWinnerPerRound = document.createElement("div");
const body = document.querySelector("body");

// ********************************************************


body.style.display = "flex";
body.style.justifyContent = "space-evenly";
body.style.alignContent = "center";
body.style.flexDirection = "column";

let gameCheck = game();


// *******************************************************************
// ******************* FUNCTIONS *************************************
function getComputerChoice()
{
    let cpuChoice = Math.floor(Math.random() * 100);
    cpuChoice = cpuChoice % 3;  // choose a number between 0 and 2, inclusive

    let strCPUGuess = '';
    if (cpuChoice === 0)
    {
        strCPUGuess = "Rock";
    }
    else if(cpuChoice === 1)
    {
        strCPUGuess = "Paper";
    }
    else
    {
        strCPUGuess = "Scissors";
    }
    return strCPUGuess;
}


function playOneGame(playerSelection, computerSelection)
{
    let outcome;   
    if (playerSelection === "Rock")
    {
        if(computerSelection === "Paper") // lose to cpu
        {
            outcome = "CPU Win, plus 1!";
        }
        else if(computerSelection === "Scissors") // beat cpu
        {
            outcome = "User Win, plus 1!";
        }
        else // tie, go again
        {
            outcome = "You tied, no points!";
        }
    }
    else if (playerSelection === "Paper") // user picks paper
    {
        if(computerSelection === "Scissors") // lose to cpu
        {
            outcome = "CPU Win, plus 1!";
        }
        else if(computerSelection === "Rock") // beat cpu
        {
            outcome = "User Win, plus 1!";
        }
        else // tie, go again
        {
            outcome = "You tied, no points!";
        }
    }
    else if (playerSelection === "Scissors") // user picks scissors
    {
        if(computerSelection === "Rock") // lose to cpu
        {
            outcome = "CPU Win, plus 1!";
        }
        else if(computerSelection === "Paper") // beat cpu
        {
            outcome = "User Win, plus 1!";
        }
        else // tie, go again
        {
            outcome = "You tied, no points!";
        }
    }
    else
    {
        console.log("ERROR");
        return -1;
    }

    return outcome;
}

function game()
{
    let gameWinner;

    rockBtn.addEventListener('click', () => {
        userGuess = "Rock";
        cpuGuess = getComputerChoice();
        gameWinner = playOneGame(userGuess, cpuGuess);
        addToScore(gameWinner);
    });

    paperBtn.addEventListener('click', () => {
        userGuess = "Paper";
        cpuGuess = getComputerChoice();
        gameWinner = playOneGame(userGuess, cpuGuess);
        addToScore(gameWinner);
    });

    scissorsBtn.addEventListener('click', () => {
        userGuess = "Scissors";
        cpuGuess = getComputerChoice();
        gameWinner = playOneGame(userGuess, cpuGuess);
        addToScore(gameWinner);
    });      

    // game runs correctly
    return 0;
}

function addToScore(winner)
{
    if(winner === "User Win, plus 1!")
    {
        userScore++;
    }
    else if(winner === "CPU Win, plus 1!")
    {
        cpuScore++;
    }

    updateScoreboard(winner);
}

function updateScoreboard(roundWinner)
{
    scoreBoard.textContent = `Score is User: ${userScore} to CPU: ${cpuScore}`;
    scoreBoard.style.textAlign = "center";
    scoreBoard.style.margin = "30px"
    playerWinnerPerRound.textContent = `${roundWinner}`;
    playerWinnerPerRound.style.textAlign = "center";
    playerWinnerPerRound.style.margin = "30px"
    buttonCntr.appendChild(scoreBoard);
    buttonCntr.appendChild(playerWinnerPerRound);
    checkWinner();
} 

function checkWinner()
{
    if(userScore === 5)
    {
        scoreBoard.textContent = "YOU WIN, CONGRAGULATIONS";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        playerWinnerPerRound.remove();
    }
    else if(cpuScore === 5)
    {
        scoreBoard.textContent = "YOU LOSE, BETTER LUCK NEXT TIME";
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        playerWinnerPerRound.remove();
    }
}