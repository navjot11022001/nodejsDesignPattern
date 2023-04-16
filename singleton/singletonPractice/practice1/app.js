const Game=require("./Game");
const Player=require("./Player");


const Pocker=new Game();
const Player1=new Player("Navjot");
const Player2=new Player("Kartik");

Pocker.join(Player1);
Pocker.join(Player2);

Player1.wins(102);
Player2.wins(1000);

console.log("scores",Pocker.scores());
console.log("winner",Pocker.getWinner());




