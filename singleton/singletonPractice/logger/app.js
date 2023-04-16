const logger = require("./logger");
const Shop = require("./Shop")
const Store = require("./Store")
// const logger = new Logger();

logger.log("starting the app");

const store = new Store("trends", [{
    item: 'Downhill Skis',
    qty: 5,
    price: 750
},
{
    item: 'Knit Hat',
    qty: 20,
    price: 5
}]);
const shopper=new Shop("navjot",1000);
logger.log("finishing.....");
console.log(logger.count);

//1st instance= shop
//2nd instance=store
//3rd instance=logger
