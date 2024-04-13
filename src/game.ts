

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

        

    }


}
