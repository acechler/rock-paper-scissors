

export class Game{

 

    private options : Array<string>;

    constructor(){
        this.options = ["Rock","Paper","Scissors"];
    }

    displayOptions(){
        let counter : number = 1;
        console.log("Pick an option");
        this.options.forEach(option =>{
            console.log(`${counter}) ${option}`);
            counter+=1;
        })
    }

    playRound(userChoice: number): void {
        
        const enemyChoice = Math.floor(Math.random() * this.options.length);
        console.log(`Enemy: ${this.options.at(enemyChoice)}`);
        console.log(`You: ${this.options.at(userChoice)}`);

        /// TODO Refactor this
        if(this.options.at(userChoice) === 'Rock' && this.options.at(enemyChoice) === 'Scissors'){
            console.log('You win');
        } else if(this.options.at(userChoice) === 'Paper' && this.options.at(enemyChoice) === 'Rock'){
            console.log('You win')
        } else if(this.options.at(userChoice) === 'Scissors' && this.options.at(enemyChoice) === "Paper"){
            console.log('You win');
        } else{
            console.log('tie');
        }
        

    }


}
