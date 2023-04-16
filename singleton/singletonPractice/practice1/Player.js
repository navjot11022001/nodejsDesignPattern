const ScoreBoard=require("./ScoreBoard");
// const ScoreBoard=new ScoreBoard();

class Player{
constructor(name){
    this.player={name,points:0}
}
joinGame(Player){
     ScoreBoard.join(Player)
}
wins(points){
 ScoreBoard.update(this.player.name,points) 
}
looses(points){
 ScoreBoard.update(this.player.name,-points) 
}
}
module.exports=Player;