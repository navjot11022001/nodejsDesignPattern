const Player=require("./Player");
const score=require("./ScoreBoard");
const player=new Player();
// const score=new ScoreBaord();
class Game{    
join(Player){
    console.log(Player.player)
    player.joinGame(Player.player);
}   
scores(){
    return score.getBoard()
}
getWinner(){
    return score.sort()[0]
}
}
module.exports=Game;