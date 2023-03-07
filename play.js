const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function compPlay() {
    const options = ["rock", "paper", "scissors"]
    const primary = Math.floor(Math.random()*3);
    return options[primary];
}

function isChoice(word) {
  const selection = [ROCK, PAPER, SCISSORS];
  return selection.includes(word);
}


compPlay();
