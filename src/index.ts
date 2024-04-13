import { Game } from "./game";

// Buttons
const rockBtn = document.querySelector("#rock-button") as HTMLButtonElement;
const paperBtn = document.querySelector("#paper-button") as HTMLButtonElement;
const scissorsBtn = document.querySelector("#scissors-button") as HTMLButtonElement;

const playerResultDiv = document.querySelector(".player-result") as HTMLDivElement;
const enemyResultDiv = document.querySelector(".enemy-result") as HTMLDivElement;
const displayWinnerDiv = document.querySelector(".display-winner") as HTMLDivElement;
const game = new Game();


if (rockBtn) {
  rockBtn.addEventListener("click", () => {
    game.playRound(1);
    playerResultDiv.textContent = `You Picked: ${game.getUserResult()}`;
    enemyResultDiv.textContent = `Enemy Picked: ${game.getEnemyResult()}`;
    displayWinnerDiv.textContent = game.getWinner();
  });
}
if (paperBtn) {
  paperBtn.addEventListener("click", () => {
    game.playRound(2);
    playerResultDiv.textContent = `You Picked: ${game.getUserResult()}`;
    enemyResultDiv.textContent = `Enemy Picked: ${game.getEnemyResult()}`;
    displayWinnerDiv.textContent = game.getWinner();
  });
}
if (scissorsBtn) {
  scissorsBtn.addEventListener("click", () => {
    game.playRound(3);
    playerResultDiv.textContent = `You Picked: ${game.getUserResult()}`;
    enemyResultDiv.textContent = `Enemy Picked: ${game.getEnemyResult()}`;
    displayWinnerDiv.textContent = game.getWinner();
  });
}
