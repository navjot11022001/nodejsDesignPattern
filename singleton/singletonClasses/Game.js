const score=require("./Scoreboard");
// const score=new ScoreBoard();

class Game{
    join(player){
        score.join(player.getName());
    }
    scores(){
        return score.getBoard()
    }
    getWinner(){
        return score.sort()[0]
    }
}
module.exports=Game;
