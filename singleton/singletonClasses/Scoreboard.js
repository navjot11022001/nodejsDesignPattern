class Scoreboard{
constructor(){
    this.board=[]
}
join(name){
     this.board.push({
        name,points:0
     });
}
leave(playerName){
    this.board=this.board.filter(({name})=>name!==playerName);
}
update(playerName,points){
    const idx=this.board.findIndex(({name})=>playerName===name);
    if(idx!==-1){
this.board[idx].points=points
    }}
getBoard(){
    return this.board;
    }
sort(){
return this.board.sort((a,b)=>b.points-a.points);
}
}
// module.exports=Scoreboard;
module.exports=new Scoreboard();