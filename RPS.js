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

let cpuGuess = getComputerChoice(); // gets number between 0 and 2, inclusive

// console.log(cpuGuess);

let userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
const cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1);

console.log(cleanUserGuess);


function playOneGame(playerSelection, computerSelection)
{
    if (playerSelection === "Rock")
    {
        if(computerSelection === "Paper")
        {
            console.log("Paper beats Rock! You Lose!");
        }
        else if(computerSelection === "Scissors")
        {
            console.log("Congratulations! Rock beats Scissors! You Win!");
        }
        else
        {
            console.log("It's a tie, you both picked rock")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cpuGuess = getComputerChoice();
            playOneGame(userGuess, cpuGuess);
        }
    }
}

playOneGame(userGuess, cpuGuess);
