let cash=0;//this is the private variable
const CashRegister={
    credit(amount){
cash+=amount;
return cash
    },
    debit(amount){
        cash-=amount;
        return cash;
    },
    total(){
        return cash;
    }
}
module.exports=CashRegister