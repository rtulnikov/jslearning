const greet = (frasa = 'Привет', name = 'Ратмир') =>{
    return `${frasa}, ${name}!`;
};

console.log(greet());

const getRandomNumber = (number = 10) =>{
    let random = Math.ceil(Math.random() * number);
    return random;
}
console.log(getRandomNumber())

let ten = 10;
console.log(ten++);
console.log(ten);
let twenty = 20;
console.log(++twenty)