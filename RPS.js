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

let outcome;
function playOneGame(playerSelection, computerSelection)
{
    
    if (playerSelection === "Rock")
    {
        if(computerSelection === "Paper") // lose to cpu
        {
            outcome = "CPU Win";
        }
        else if(computerSelection === "Scissors") // beat cpu
        {
            outcome = "User Win";
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Rock. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cpuGuess = getComputerChoice();
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            playOneGame(cleanUserGuess, cpuGuess);
            return outcome;
        }
    }
    else if (playerSelection === "Paper") // user picks paper
    {
        if(computerSelection === "Scissors") // lose to cpu
        {
            outcome = "CPU Win";
        }
        else if(computerSelection === "Rock") // beat cpu
        {
            outcome = "User Win";
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Paper. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            cpuGuess = getComputerChoice();
            playOneGame(cleanUserGuess, cpuGuess);
            return outcome;
        }
    }
    else if (playerSelection === "Scissors") // user picks scissors
    {
        if(computerSelection === "Rock") // lose to cpu
        {
            outcome = "CPU Win";
        }
        else if(computerSelection === "Paper") // beat cpu
        {
            outcome = "User Win";
        }
        else // tie, go again
        {
            console.log("It's a tie, you both picked Scissors. Pick again")
            userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
            cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
            cpuGuess = getComputerChoice();
            playOneGame(cleanUserGuess, cpuGuess);
            return outcome;
        }
    }
    else
    {
        console.log("You chose something invalid!! Try again");
        userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
        cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
        playOneGame(cleanUserGuess, cpuGuess);
        return outcome;
    }

    return outcome;
}

let cpuGuess = getComputerChoice(); // gets number between 0 and 2, inclusive

// console.log(cpuGuess);

let userGuess = prompt("Please pick Rock, Paper, or Scissors: ");
let cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();

let gameOutcome = playOneGame(cleanUserGuess, cpuGuess);
console.log(gameOutcome);
