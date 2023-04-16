class ScoreBaord{
    constructor(){
    this.board=[]
}
getScoreBoard(){
return this.board()
}
join(player){

this.board.push({name:player.name,points:player.points||0})
console.log(this.board)
}
leave(playerName){
this.board=this.board.filter(({name}={})=>name!==playerName);
}
getBoard(){
return this.board
}
update(playerName,points){
const idx=this.board.findIndex(({name})=>name===playerName);
if(idx!=-1){this.board[idx].points=points;}
}
sort(){
return this.board.sort((a,b)=>b.points-a.points);
}

}
module.exports=new ScoreBaord();
