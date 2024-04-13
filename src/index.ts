import { Game } from "./game";

const rockBtn = document.querySelector("#rock-button") as HTMLButtonElement;
const paperBtn = document.querySelector("#paper-button") as HTMLButtonElement;
const scissorsBtn = document.querySelector(
  "#scissors-button"
) as HTMLButtonElement;
if (rockBtn) {
  rockBtn.addEventListener("click", () => {
    console.log("rock");
  });
}
if (paperBtn) {
  paperBtn.addEventListener("click", () => {
    console.log("paper");
  });
}
if (scissorsBtn) {
  scissorsBtn.addEventListener("click", () => {
    console.log("scissors");
  });
}
const game = new Game();
game.displayOptions();
console.log("\n");
console.log(game.playRound(Math.floor(Math.random() * 3)));
