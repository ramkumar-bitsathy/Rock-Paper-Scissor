var playerScore = 0;
var computerScore = 0;

function play(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update player's choice image
  var playerImg = document.getElementById("playerImg");
  playerImg.src = "images/" + userChoice + ".png";
  playerImg.alt = "Your choice";

  // Update computer's choice image
  var computerImg = document.getElementById("computerImg");
  computerImg.src = "images/" + computerChoice + ".png";
  computerImg.alt = "Computer's choice";

  var result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  document.getElementById("result").innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  document.getElementById("playerScore").innerText = `Your score: ${playerScore}`;
  document.getElementById("computerScore").innerText = `Computer's score: ${computerScore}`;
}
