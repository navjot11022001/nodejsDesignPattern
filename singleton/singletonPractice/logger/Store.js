const logger=require("./logger");
// const logger=new Logger();
class Shop {
    constructor(name, inventory = []) {
this.name=name;
this.inventory=inventory;
logger.log(`New Store: ${name} has ${inventory.length} items in stock`);
    }
}
module.exports=Shop;