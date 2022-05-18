function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const choices = [
  "rock",
  "paper",
  "scissors"
]

const superiorChoices = [
  "paper",
  "scissors",
  "rock"
]

const inferiorChoices = [
  "scissors",
  "rock",
  "paper"
]

function computerPlay() {
  let x = getRandomInt(0,2);
  let cSelect = choices[x];
  return cSelect;
}

function playRound(playerSelection, computerSelection) {
  // Deal with inappropriate inputs
  if( playerSelection == undefined) return console.log("Acceptable inputs are rock, paper or scissors");
  let pSelect = playerSelection.toLowerCase();
  let cSelect = computerSelection.toLowerCase();

  if (!choices.includes(pSelect)) return console.log("Acceptable inputs are rock, paper or scissors")

  if (pSelect == cSelect) return "draw";
  else if (superiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
    console.log(`You win! ${pSelect} beats ${cSelect}`);
    return "player";
  }
  else if (inferiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
    console.log(`You lose! ${cSelect} beats ${pSelect}`);
    return "comp";
  }
}

function game() {
  let cCounter = 0;
  let pCounter = 0;

  for (let i = 0; i < 5; i++) {
    if (playRound() == "comp") {
      cCounter++;
    } else if (playRound() == "player") {
      pCounter++;
    }
  }

  if (cCounter > pCounter) console.log(`The computer wins with a score of ${cCounter} to ${pCounter}!`);
  if (cCounter < pCounter) console.log(`The player wins with a score of ${pCounter} to ${cCounter}!`);
}

// 3
// get random number
// create array
// use random to access element of array
// return element

// 4
// Player inputs value
// six outcomes W/L & R/P/S and draw
// Round compares user vs comp with if statements
// return quote