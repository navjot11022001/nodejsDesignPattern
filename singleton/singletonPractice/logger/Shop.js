const logger=require("./logger");
// const logger=new Logger();
class Shopper{
constructor(name,money=0){
this.name=name;
this.money=money;
logger.log(`new Shopper ${name } has ${money} in their account`);
}
}
module.exports=Shopper;