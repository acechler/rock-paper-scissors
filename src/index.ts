import { Game } from "./game";

// Buttons
const rockBtn = document.querySelector("#rock-button") as HTMLButtonElement;
const paperBtn = document.querySelector("#paper-button") as HTMLButtonElement;
const scissorsBtn = document.querySelector("#scissors-button") as HTMLButtonElement;

const playerResultDiv = document.querySelector(".player-result") as HTMLDivElement;
const enemyResultDiv = document.querySelector(".enemy-result") as HTMLDivElement;
const displayWinnerDiv = document.querySelector(".display-winner") as HTMLDivElement;
const game = new Game();




function setupButton(button: HTMLButtonElement, choice: number) {
  if (button) {
    button.addEventListener("click", () => {
      game.playRound(choice);
      playerResultDiv.textContent = `You Picked: ${game.getUserResult()}`;
      enemyResultDiv.textContent = `Enemy Picked: ${game.getEnemyResult()}`;
      displayWinnerDiv.textContent = game.getWinner();
    });
  }
}

setupButton(rockBtn, 1);      
setupButton(paperBtn, 2);     
setupButton(scissorsBtn, 3);  