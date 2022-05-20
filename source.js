// Initialise arrays for play comparisons
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

// Create a number to randomly select the index of 'choices' array 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomise computer's play
function computerPlay() {
  let x = getRandomInt(0,2);
  let cSelect = choices[x];
  return cSelect;
}

function playRound(playerSelection, computerSelection) {
  // Deal with null inputs
  if( playerSelection == undefined) 
      return console.log("Acceptable inputs are rock, paper or scissors");
  
  // Canonicalise user inputs
  let pSelect = playerSelection.toLowerCase();
  let cSelect = computerSelection.toLowerCase();

  // Deal with invalid inputs
  if (!choices.includes(pSelect)) 
      return console.log("Acceptable inputs are rock, paper or scissors")

  // Check for equality, win & loss
  if (pSelect == cSelect) {
    return "draw";
  } else if (superiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
      console.log(`You win! ${pSelect} beats ${cSelect}`);
      return "player";
  } else if (inferiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
      console.log(`You lose! ${cSelect} beats ${pSelect}`);
      return "comp";
    }
}

function game() {
  // Initialise counters
  let round = 0;
  let cCounter = 0;
  let pCounter = 0;

  for (let i = 0; i < 5; i++) {
    let c = computerPlay();
    let p = prompt(`Round ${++round}!
    What will you play this time?`, "Rock, Paper or Scissors?");
    console.log(p);

    // The winner is returned as a string
    let winner = playRound(p,c);

    if (winner == "comp") {
      cCounter++;
    } else if (winner == "player") {
      pCounter++;
    }
  }

  // log the winner
  if (cCounter > pCounter) 
      console.log(`The computer wins with a score of ${cCounter} to ${pCounter}!`);
  if (cCounter < pCounter) 
      console.log(`The player wins with a score of ${pCounter} to ${cCounter}!`);
}