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
    if (playerSelection === "Rock")
    {
        if(computerSelection === "Paper") // lose to cpu
        {
            console.log("Paper beats Rock! You Lose!");
        }
        else if(computerSelection === "Scissors") // beat cpu
        {
            console.log("Congratulations! Rock beats Scissors! You Win!");
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Rock. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cpuGuess = getComputerChoice();
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            playOneGame(cleanUserGuess, cpuGuess);
        }
    }
    else if (playerSelection === "Paper") // user picks paper
    {
        if(computerSelection === "Scissors") // lose to cpu
        {
            console.log("Scissors beats Paper! You Lose!");
        }
        else if(computerSelection === "Rock") // beat cpu
        {
            console.log("Congratulations! Paper beats Rock! You Win!");
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Paper. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            cpuGuess = getComputerChoice();
            playOneGame(cleanUserGuess, cpuGuess);
        }
    }
    else if (playerSelection === "Scissors") // user picks scissors
    {
        if(computerSelection === "Rock") // lose to cpu
        {
            console.log("Rock beats Scissors! You Lose!");
        }
        else if(computerSelection === "Paper") // beat cpu
        {
            console.log("Congratulations! Scissors beats Paper! You Win!");
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Scissors. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            cpuGuess = getComputerChoice();
            playOneGame(cleanUserGuess, cpuGuess);
        }
    }
    else
    {
        console.log("You chose something invalid!! Try again");
        userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
        cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
        playOneGame(cleanUserGuess, cpuGuess);
    }
}

let cpuGuess = getComputerChoice(); // gets number between 0 and 2, inclusive

// console.log(cpuGuess);

let userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
let cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();

playOneGame(cleanUserGuess, cpuGuess);
