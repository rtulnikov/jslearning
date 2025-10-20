// const dima = {
//     name: "дима",
//     age: 5,
//     greet() {
//         return "Привет, " + this.name;
//     },
// };

// const ratmir = {
//     name: "ратмир",
//     age: 11,
//     greet() {
//         return "Привет, " + this.name;
//     },
// };
function createObject(name,age){
    return {
        name,
        age,
        greet() {
        return "Привет, " + this.name;
    },
    }
}
const dima = createObject('дима',5)
const ratmir = createObject('ратмир', 11)
const vasy_sresy = createObject('вася срася', 10)

console.log(dima,ratmir,vasy_sresy)
user = {
    password: 111
}
function removePassword(reset){
    if(reset){
        this.password = undefined;
    } else{
        this.password = 1;
    }
}
user.removePassword = removePassword.bind(user);
user.removePassword(true)
console.log(user.password)