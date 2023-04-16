const Till=require("./CashRegister");
const Till1=require("./CashRegister");
//this is getting cashed 
Till.credit(25);
Till.credit(25);
Till1.credit(20);


Till.debit(12)
Till1.debit(45);
Till.credit(122)
console.log(`Total amount in till= ${Till1.total()}`)
console.log(`Total amount in till= ${Till.total()}`) 