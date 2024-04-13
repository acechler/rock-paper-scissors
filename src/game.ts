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

  private userResult: string;
  private enemyResult: string;
  private winner: string;

  constructor() {
    this.userResult = "";
    this.enemyResult = ""
    this.winner = "";
  }

  displayOptions() {
    let counter: number = 1;
    console.log("Pick an option");
    this.options.forEach(option => {
      console.log(`${counter}) ${option}`);
      counter += 1;
    })
  }

  private setUserResult(result: string) {
    this.userResult = result;
  }
  getUserResult(): string {
    return this.userResult;
  }

  private setEnemyResult(result: string) {
    this.enemyResult = result;
  }
  getEnemyResult(): string {
    return this.enemyResult;
  }

  private setWinner(result: string){
    this.winner = result;
  }
  getWinner(){
    return this.winner;
  }

  playRound(userChoice: number): void {
    userChoice -= 1;
    const enemyChoice = Math.floor(Math.random() * this.options.length);
    console.log(`Enemy: ${this.options.at(enemyChoice)}`);
    console.log(`You: ${this.options.at(userChoice)}`);

    if (userChoice === enemyChoice) {
      this.setUserResult(this.options[userChoice]);
      this.setEnemyResult(this.options[enemyChoice]);
      this.setWinner("You Tied!");
      return;
    }

    if (this.winConditions[this.options[userChoice]] === this.options[enemyChoice]) {
      this.setUserResult(this.options[userChoice]);
      this.setEnemyResult(this.options[enemyChoice]);
      this.setWinner("You Win!");
    } else {
      this.setUserResult(this.options[userChoice]);
      this.setEnemyResult(this.options[enemyChoice]);
      this.setWinner("You Lose!");
    }


  }


}
