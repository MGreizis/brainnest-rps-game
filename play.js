const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function compPlay() {
    const options = ["rock", "paper", "scissors"]
    const primary = Math.floor(Math.random()*3);
    return options[primary];
}

function getPlayerInput() {
  let input = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (input !== "rock" && input !== "paper" && input !== "scissors") {
    input = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return input;
}

function isChoice(word) {
  const selection = [ROCK, PAPER, SCISSORS];
  return selection.includes(word);
}

function getDecision() {
  let decision;
  while (true) {
    decision = prompt("Rock, Paper, or Scissors?")
      .toLowerCase()
      .trim();
    if (isChoice(decision)) break;
    alert(
      `Input "${decision}"\ invalid Please enter: rock, paper, or scissors`
    );
    }

  switch (decision) {
    case ROCK:
      return ROCK;
    case PAPER:
      return PAPER;
    case SCISSORS:
      return SCISSORS;
    default:
      console.error("Unknown case");
  }
}


compPlay();