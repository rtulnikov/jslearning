const greet = function () {
    return "Привет, " + this.name;
};


const dima = {
    name: "дима",
    age: 5,
    greet() {
        return "Привет, " + this.name;
    },
};
const ratmir = {
    name: "ратмир",
    age: 11,
    greet: dima.greet,
};
console.log(ratmir.greet())
// console.log(dima.greet());
