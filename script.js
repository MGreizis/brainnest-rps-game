let playerScore = 0;
let computerScore = 0;
let gameCancelled = false;

function gameController(getPlayerInput, getComputerInput, getRoundWinner) {
  // Initialize the scores for a new game
  playerScore = 0;
  computerScore = 0;
  gameCancelled = false
  // Play game
  const numberOfRounds = askTotalRounds();
  // Check cancel option when asking for rounds
  if (gameCancelled) {
    return;
  }
  for (let i = 0; i < numberOfRounds; i++) {
    if (!gameCancelled) {
      round(getPlayerInput, getComputerInput, getRoundWinner, i + 1);
    } else {
      // The cancelGame function was called and gameCancelled == true
      return;
    }
  }
  // Declare set winner after all rounds
  if (playerScore > computerScore) {
    alert('Congratulations. You Win!');
  }
  else if (computerScore > playerScore) {
    alert('Bad luck. Opponent Wins');
  }
  else {
    alert('It\'s a draw');
  }
  // Play again option
  if (confirm('Play Again?')) {
    return gameController(getPlayerInput, getComputerInput, getRoundWinner);
  }
}

function cancelGame() {
  gameCancelled = true;
  alert('The game has been cancelled');
}

function askTotalRounds() {
  const roundsRegExp = /^([5-9]|1[0-9]|20)$/;
  let numberOfRounds = prompt('How many rounds do you wish to play?');
  // User clicks the cancel button
  if (!numberOfRounds) {
    if (confirm('Exit the game?')) {
      return cancelGame();
    } else {
      return askTotalRounds()
    }
  }
  while (!roundsRegExp.test(numberOfRounds)) {
     numberOfRounds = prompt('Please input a number from 5 to 20. How many rounds do you wish to play?');
  }
  console.log(`Winner of ${numberOfRounds} rounds`);
  return Number(numberOfRounds);
}

function round(getPlayerInput, getComputerInput, roundWinner, round) {
  const computerInput = getComputerInput();
  const playerInput = getPlayerInput(round);
  // Check cancel option
  if (!playerInput) {
    return;
  }
  console.log(`You chose ${playerInput}`);
  console.log(`Opponent chose ${computerInput}`);
  const winner = roundWinner(playerInput, computerInput);
  switch (winner) {
    case 'player': {
      playerScore++;
      console.log('You win this round');
      break;
    }
    case 'computer': {
      computerScore++;
      console.log('Opponent wins this round');
      break;
    }
    default : {
      console.log('It \'s a draw');
    }
      
  }
  console.log(`Current Score: Player ${playerScore} - ${computerScore} Opponent`);
}

const roundWinner = (playerInput, computerInput) => {
  let s = "scissors";
  let p = "paper";
  let r = "rock";
  let result = "";
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
  return result;
};

function compPlay() {
  const options = ["rock", "paper", "scissors"];
  const primary = Math.floor(Math.random() * 3);
  return options[primary];
}

function getPlayerInput(round) {
  let input = prompt(`Round ${round}. Enter rock(r), paper(p), or scissors(s):`);
  // Users types something
  if (typeof input === 'string') {
    input = adjustInput(input);
  }
  // If the user clicks cancel instead
  else {
    const exit = confirm('Exit the game?')
    if (exit) {
      return cancelGame();
    } else {
      return getPlayerInput(round);
    }
  }
  
  // Check correct input
  while (input !== "rock" && input !== "paper" && input !== "scissors") {
    // User types something that isn't an option
    input = adjustInput(prompt(
      "Invalid input. Please enter rock, paper, or scissors:"
    ));
  }
  return input;
}

function adjustInput(input) {
  input = input.toLowerCase().trim();
  // Possible grammar errors and single letter options
  switch (input) {
    case 'scisors':
    case 'scisor':
    case 'scissor':
    case 's':
      input = 'scissors';
      break;
    case 'r':
      input = 'rock';
      break;
    case 'p':
      input = 'paper';
  }
  return input;
}

gameController(getPlayerInput, compPlay, roundWinner);