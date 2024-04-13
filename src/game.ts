

export class Game{

    message: string;

    constructor(message: string){
        this.message = message;
    }
 
    getMessage(): string{
        return this.message;
    }
}