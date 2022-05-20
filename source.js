// Initialise arrays for play comparisons
const choices = ["rock", "paper", "scissors"];
const superiorChoices = ["paper", "scissors", "rock"];
const inferiorChoices = ["scissors", "rock", "paper"];

// Create a number to randomly select the index of 'choices' array 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomise computer's play
function computerPlay() {
  let x = getRandomInt(0,2);
  let choice = choices[x];
  return choice;
}

  // Initialise counters
  let round = 0;
  let cCounter = 0;
  let pCounter = 0;

function playRound(event) {
  let pSelect = event.path[0].classList[0];
  let cSelect = computerPlay();

  // Insert played-move text
  let newNode = document.createElement("div");
  newNode.textContent = `Strong move, you played ${pSelect}!`;
  newNode.classList = "testing display";
  let parentNode = document.querySelector("body");
  let refNode = document.querySelector(".testing.display");
  parentNode.replaceChild(newNode, refNode);

  // Check for equality, win & loss
  if (pSelect == cSelect) {
    return "draw";
  }  else if (superiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
      console.log(`You win! ${pSelect} beats ${cSelect}`);
      pCounter++;
  } else if (inferiorChoices.indexOf(pSelect) == choices.indexOf(cSelect)) {
      console.log(`You lose! ${cSelect} beats ${pSelect}`);
      cCounter++;
    }
  round++;

  // Insert updated results to user;
  const result = document.querySelector(".results");
  const lastItem = document.querySelector("div.results > div");
  const div = document.createElement("div");
  div.className = "epic-score-card";
  div.textContent = `Player: ${pCounter}, Computer: ${cCounter}`;
  result.replaceChild(div, lastItem);

  // If player reaches limit display on page: score reached
  if(pCounter == 5) winner = "player";
  if(cCounter == 5) winner = "computer";
  if(pCounter == 5 || cCounter == 5) {
    let newNode2 = document.createElement("div");
    newNode2.textContent = `${winner} is our winner this time!`
    let newNode2Parent = document.querySelector("div.results");
    newNode2Parent.append(newNode2);

    // Toggle all buttons to remove their classes
    buttons.forEach(button => button.removeEventListener("click", playRound));
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));