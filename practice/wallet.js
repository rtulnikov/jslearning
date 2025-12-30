const wallet = {
    balance: 0,
    operations: [],
    increase(number, operation) {
        if (number && operation) {
            this.operations.push({ reson: operation, sum: number });
            return (this.balance += number);
        } else {
            return;
        }
    },
    reduce(number, operation) {
        if (this.balance < number) {
            this.operations.push({
                alert: "недостаточно средств",
                sum: -number,
            });
            return false;
        }
        this.operations.push({ reson: operation, sum: -number });
        this.balance -= number;
        return true;
    },
    getOperations() {
        return this.operations;
    },
    getBalance() {
        return this.balance;
    },
    getAlert() {
        return this.operations.filter((obj) => obj.hasOwnProperty("alert"));
    },
    getAlert2() {
        return this.operations.filter((obj) => {
            return "alert" in obj;
        });
    },
};

wallet.increase(5156, "зарплата");
console.log(wallet.operations);
console.log(wallet.balance);
wallet.balance -= wallet.balance;
wallet.reduce(6450, "покупка кофеварки");
wallet.reduce(6350, "покупка кофеварки");
console.log(wallet.operations);
console.log(wallet.balance);
console.log(wallet.getOperations());
console.log(wallet.getAlert2());
