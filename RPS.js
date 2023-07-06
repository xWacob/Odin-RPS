// ***************** GLOBALS ******************************

let userGuess;
let cpuGuess;
let cleanUserGuess;
let outcome;

// ********************************************************

let userScore = 0;
let cpuScore = 0;

let gameCheck = game();

if (gameCheck === 0)
{
    if(userScore > cpuScore)
    {
        console.log(`You beat the CPU by a score of ${userScore} to ${cpuScore}, good guessing!`);
    }
    else
    {
        console.log(`The CPU beat you by a score of ${cpuScore} to ${userScore}, better luck next time!`);
    }
}
else
{
    console.log("ERROR OCCURRED");
}


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

function game()
{
    let gameOutcome;
    for(i = 0; i < 5; i++)
    {
        cpuGuess = getComputerChoice(); // gets number between 0 and 2, inclusive

        userGuess = prompt("Please pick Rock, Paper, or Scissors: "); // ask user for their input
        cleanUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();

        gameOutcome = playOneGame(cleanUserGuess, cpuGuess); 

        if(gameOutcome === "CPU Win")
        {
            cpuScore++;
        }
        else if (gameOutcome === "User Win")
        {
            userScore++;
        }
        else
        {
            console.log("Invalid event occurred, exiting...");
            return null;
        }
    }

    // game runs correctly
    return 0;
}