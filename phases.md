# Phases

Documentation on any errors that I encountered and solved.

## Programming the logic

- I wanted to add user input to the terminal but it did not work out due to webpack

```ts
import * as readline from "readline";

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

- This is what it looked like after completing the logic
- Notice how everything is being done in `playRound()`, this becomes an issue later.

### game.ts

```ts
enum GameOption {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export class Game {
  private options = [GameOption.Rock, GameOption.Paper, GameOption.Scissors];
  private winConditions: { [key: string]: GameOption } = {
    [GameOption.Rock]: GameOption.Scissors,
    [GameOption.Paper]: GameOption.Rock,
    [GameOption.Scissors]: GameOption.Paper,
  };
  constructor() {}

  displayOptions() {
    let counter: number = 1;
    console.log("Pick an option");
    this.options.forEach((option) => {
      console.log(`${counter}) ${option}`);
      counter += 1;
    });
  }

  playRound(userChoice: number): string {
    userChoice -= 1; // allows choice to work with array.
    const enemyChoice = Math.floor(Math.random() * this.options.length);
    console.log(`Enemy: ${this.options.at(enemyChoice)}`);
    console.log(`You: ${this.options.at(userChoice)}`);

    if (userChoice === enemyChoice) {
      return "It's a tie";
    }

    if (
      this.winConditions[this.options[userChoice]] === this.options[enemyChoice]
    ) {
      return "You win";
    } else {
      return "You lose";
    }
  }
}
```

### index.ts

```ts
import { Game } from "./game";
const game = new Game();
game.displayOptions();
console.log("\n");
console.log(game.playRound(Math.floor(Math.random() * 3)));
```
