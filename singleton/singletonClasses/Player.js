const Scores = require("./Scoreboard");
// const Scores=new Scoreboard();

class Player{
constructor(name){this.name=name;}
getName(){
    return this.name;
}
wins(points){
    Scores.update(this.name,points)
}
looses(points){
    Scores.update(this.name,-points);
}
}
module.exports=Player