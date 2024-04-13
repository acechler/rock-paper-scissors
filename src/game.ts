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
        userChoice-=1; 
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
