const wallet = {
    balance: 0,
    operations: [],
    increase(number, operation) {
        wallet.operations.push({reson: operation, sum: number})
       return  wallet.balance += number
    },
    reduce(number, operation) {
        if(wallet.balance < number){
             wallet.operations.push({alert: "недостаточно средств", sum: -number}) 
            return false
        }else{
        wallet.operations.push({reson:  operation, sum: -number})
         wallet.balance -= number
        return true
        }
    },
    getOperations(){
       return  wallet.operations
    },
    getBalance(){
        return wallet.balance;
    },
}
wallet.increase(5156,"зарплата")
console.log(wallet.operations)
console.log(wallet.balance)
wallet.reduce(6450, "покупка кофеварки")
console.log(wallet.operations)
console.log(wallet.balance)
console.log(wallet.getOperations())
console.log(wallet.getBalance())