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

function round(getPlayerInput, getComputerInput, getRoundWinner) {
  // const computerInput = getComputerInput()
  // const playerInput = getPlayerInput()
  const winner = getRoundWinner("rock", "scissors")
  switch (winner) {
    case 'Player 1 won!': {
      playerScore++
      console.log('You win this round')
      break;
    }
    case 'Player 2 won!': {
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
const rps = (playerScore, computerScore) => {
  let s = "scissors";
  let p = "paper";
  let r = "rock";
  let ans = "";

  console.log(rps)
  switch (rps) {
    case playerScore == p && computerScore == r:
    case playerScore == s && computerScore == p:
    case playerScore == r && computerScore == s:
      ans = "Player 1 won!";
      break;

    case playerScore == s && computerScore == r:
    case playerScore == r && computerScore == p:
    case playerScore == p && computerScore == s:
      ans = "Player 2 won!";
      break;

    default:
      ans = "Draw!";
      break;
  }
  console.log(ans)
  return ans;
};

rps("paper", "scissors");
// gameController(null, null, rps)