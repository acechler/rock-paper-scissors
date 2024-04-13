import {Game} from './game';


const game = new Game();
game.displayOptions();
console.log('\n');
console.log(game.playRound( Math.floor(Math.random() * 3)));