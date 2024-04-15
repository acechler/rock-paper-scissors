# TypeScript Boilerplate

## Introduction
This TypeScript Boilerplate provides a foundational setup for building robust web applications using TypeScript. It integrates key development tools such as Webpack for bundling, Jest for testing, and includes a configured development server for a seamless development experience.

## Setup and Installation
To get started with this boilerplate, follow the steps below to setup the project on your local machine:

```bash
# Clone the repository
git clone https://your-repository-url.git
cd rock-paper-scissors

# Install dependencies
npm install

# Build the project
npm run build

# Run the development server
npm start:dev

# Run TypeScript
npm start:ts
```


# Project Technologies

## Frontend Technologies

- **TypeScript**: A typed superset of JavaScript, which provides type safety at compile time.
- **Webpack**: Used to bundle TypeScript files and other assets. This is for building scalable applications.
- **Webpack Dev Server**: Provides a simple web server and the ability to use live reloading.
- **HTML Webpack Plugin**: This plugin simplifies the creation of HTML files to serve the webpack bundles.
- **Jest and ts-jest**: For testing JavaScript and TypeScript code.

## Backend Technologies

- **ts-node**: This runs TypeScript code directly without pre-compiling. 
- **Node.js**: Used through ts-node and webpack-dev-server.


## Finish Logic

### game.ts

```ts
enum GameOption {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors",
}

export class Game{
    private options = [GameOption.Rock, GameOption.Paper, GameOption.Scissors];
    private winConditions: { [key: string]: GameOption } = {
      [GameOption.Rock]: GameOption.Scissors,
      [GameOption.Paper]: GameOption.Rock,
      [GameOption.Scissors]: GameOption.Paper,
    };
    constructor(){

    }

    displayOptions(){
        let counter : number = 1;
        console.log("Pick an option");
        this.options.forEach(option =>{
            console.log(`${counter}) ${option}`);
            counter+=1;
        })
    }

    playRound(userChoice: number): string {
        userChoice-=1; // allows choice to work with array.
        const enemyChoice = Math.floor(Math.random() * this.options.length);
        console.log(`Enemy: ${this.options.at(enemyChoice)}`);
        console.log(`You: ${this.options.at(userChoice)}`);

        if (userChoice === enemyChoice) {
            return 'It\'s a tie';
          }
      
          if (this.winConditions[this.options[userChoice]] === this.options[enemyChoice]) {
            return 'You win';
          } else {
            return 'You lose';
          }
        

    }


}

```


### index.ts
```ts

import {Game} from './game';


const game = new Game();
game.displayOptions();
console.log('\n');
console.log(game.playRound( Math.floor(Math.random() * 3)));

```



## Making Code DRY

### Before
```ts
import { Game } from "./game";

// Buttons
const rockBtn = document.querySelector("#rock-button") as HTMLButtonElement;
const paperBtn = document.querySelector("#paper-button") as HTMLButtonElement;
const scissorsBtn = document.querySelector("#scissors-button") as HTMLButtonElement;

const playerResultDiv = document.querySelector(".player-result") as HTMLDivElement;
const enemyResultDiv = document.querySelector(".enemy-result") as HTMLDivElement;
const displayWinnerDiv = document.querySelector(".display-winner") as HTMLDivElement;
const game = new Game();



/// Not Very DRY
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

```

### After

```ts
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


```