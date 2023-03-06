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
  const roundsRegExp = /^([1-9]|1[0-9])$/
  let numberOfRounds = prompt('How many rounds do you wish to play?')
  while (!roundsRegExp.test(numberOfRounds)) {
     numberOfRounds = prompt('Please input a number lower than 20. How many rounds do you wish to play?')
  }
  console.log(`Winner of ${numberOfRounds} rounds`)
  return Number(numberOfRounds)
}

function round(getPlayerInput, getComputerInput, getRoundWinner) {
  const computerInput = getComputerInput()
  const playerInput = getPlayerInput()
  const winner = getRoundWinner(computerInput, playerInput)
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
      
  }
  console.log(`Current Score: Player ${playerScore} - ${computerScore} Opponent`)
}

gameController()