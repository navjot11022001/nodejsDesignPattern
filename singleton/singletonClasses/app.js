const Game=require("./Game");
const Player=require("./Player");

const Peke=new Player("Pete");
const Mike=new Player("Mike");
const Poker= new Game();
 
Poker.join(Peke);
Poker.join(Mike);

Peke.wins(20);
Mike.wins(30);
Mike.wins(40);
Mike.wins(50);
Mike.wins(60);

// Peke.loses(100);

console.log("winner",Poker.getWinner());
console.log(Poker.scores());