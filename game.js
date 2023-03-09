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
  const computerInput = getComputerInput()
  const playerInput = getPlayerInput()
  const winner = roundWinner(playerInput, computerInput)
  switch (winner) {
    case 'player': {
      playerScore++
      console.log('You win this round')
      break;
    }
    case 'computer': {
      computerScore++
      console.log('Opponent wins this round')
      break;
    }
    default : {
      console.log('It \'s a draw')
    }
      
  }
  console.log(`Current Score: Player ${playerScore} - ${computerScore} Opponent`)
}

// winner ??
const roundWinner = (playerInput, computerInput) => {
  let s = "scissors";
  let p = "paper";
  let r = "rock";
  let result = "";

  console.log(roundWinner);
  if (
    (playerInput == p && computerInput == r) ||
    (playerInput == s && computerInput == p) ||
    (playerInput == r && computerInput == s)
  ) {
    result = "player";
  } else if (
    (playerInput == s && computerInput == r) ||
    (playerInput == r && computerInput == p) ||
    (playerInput == p && computerInput == s)
  ) {
    result = "computer";
  } else {
    result = "draw";
  }
  console.log(result)
  return result;
};


function compPlay() {
  const options = ["rock", "paper", "scissors"];
  const primary = Math.floor(Math.random() * 3);
  return options[primary];
}

function getPlayerInput() {
  let input = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (input !== "rock" && input !== "paper" && input !== "scissors") {
    input = prompt(
      "Invalid input. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return input;
}


// rps("paper", "scissors");
gameController(getPlayerInput, compPlay, roundWinner);