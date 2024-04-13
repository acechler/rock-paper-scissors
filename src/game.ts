

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

    playRound(userChoice: string): string {
        
        const enemyChoice = Math.floor(Math.random() * this.options.length);
        console.log(`Enemy: ${enemyChoice}`);
        console.log(`You: ${userChoice}`);
        
        if(this.options[enemyChoice] === 'Rock' && userChoice === 'Rock' || 'rock'){
            
        }

        return this.options.at(enemyChoice);
    }


}
