let playerScore = 0;
let computerScore = 0;

function gameController(getPlayerInput, getComputerInput, getRoundWinner) {
  const numberOfRounds = askRounds()
  for (let i = 0; i < numberOfRounds; i++) {
    round(getPlayerInput, getComputerInput, getRoundWinner)
  }
  if (playerScore > computerScore) {
    alert('Congratulations. You Win!')
  }
  else if (computerScore > playerScore) {
    alert('Bad luck. Opponent Wins')
  }
  else {
    alert('It\'s a draw')
  }
}

function askRounds() {
  const roundsRegExp = /^([5-9]|1[0-9]|20)$/
  let numberOfRounds = prompt('How many rounds do you wish to play?')
  while (!roundsRegExp.test(numberOfRounds)) {
     numberOfRounds = prompt('Please input a number from 5 to 20. How many rounds do you wish to play?')
  }
  console.log(`Winner of ${numberOfRounds} rounds`)
  return Number(numberOfRounds)
}

function round(getPlayerInput, getComputerInput, roundWinner) {
  // const computerInput = getComputerInput()
  // const playerInput = getPlayerInput()
  const winner = roundWinner("rock", "scissors")
  switch (winner) {
    case 'player': {
      playerScore++
      console.log('You win this round')
      break;
    }
    case 'computer': {
      computerScore++
      console.log('Opponent wins this round')
    }
    default : {
      console.log('It \'s a draw')
    }
      
  }
  console.log(`Current Score: Player ${playerScore} - ${computerScore} Opponent`)
}

// winner ??
const roundWinner = (playerScore, computerScore) => {
  let s = "scissors";
  let p = "paper";
  let r = "rock";
  let result = "";

  console.log(roundWinner);
  if ( 
     (playerScore == p && computerScore == r)||
     (playerScore == s && computerScore == p) ||
     (playerScore == r && computerScore == s)
     )
      { 
     result = "player";
    }

      else if (

    (playerScore == s && computerScore == r)||
    (playerScore == r && computerScore == p)||
    (playerScore == p && computerScore == s)
    )
{
      result = "computer";
}
      
else
{
   result = "draw";
   
  }
  console.log(ans)
  return ans;
};

// rps("paper", "scissors");
gameController(null, null, roundWinner);