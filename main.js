let rock1 = document.getElementById("rock");
let paper1 = document.getElementById("paper");
let scissor1 = document.getElementById("scissor");
let pargwinner = document.getElementById("win-lose");
let parcomputer = document.getElementById("com");
rock1.addEventListener("click", () => howWin("rock"));
paper1.addEventListener("click", () => howWin("paper"));
scissor1.addEventListener("click", () => howWin("scissor"));

howWin = (player) => {
  let computer = computerMove();
  let par = "🤖 choose " + computer;
  parcomputer.textContent = par;

  if (player === computer) {
    pargwinner.innerHTML = "Tie";
    return;
  }
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    pargwinner.innerHTML = "player win";
    return;
  }

  if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissor") ||
    (player === "scissor" && computer === "rock")
  )
    pargwinner.innerHTML = "computer win";
};

function computerMove() {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "scissor";
    case 2:
      return "paper";
  }
}
let hello = "hi ahmed ${computerMove()}";
