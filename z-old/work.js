// let age = prompt('Введите ваш возраст ');
// let hight = prompt('Введите ваш рост');
// let named = prompt('Введите ваше имя');

// console.log(`
// Ваш возраст ${age}  лет
// Ваш рост ${hight} лет   
// ваше имя ${named} `);
let privet = 'привет'
let up = privet[0].toUpperCase() + privet.slice(1);
console.log(up);


const str = 'Дима, балбес, ляля';
const array = str.split(', ');
const word1 = array[0][0].toUpperCase() + array[0].slice(1);
const word2 = array[1][0].toUpperCase() + array[1].slice(1);
const word3 = array[2][0].toUpperCase() + array[2].slice(1);


console.log(`${word1} ${word2} ${word3}`);

 
let trees = ['Дуб','Клен','Береза','Осина']
console.log(trees[0] + ', ' + trees[1] + ', ' + trees[2] + ', ' + trees[3]);
console.log(trees.join(', '));

let bereza = trees[2];
console.log(bereza.split(''));
// let str = 'Введите ваше имя';


console.log(Math.floor(Math.random() *3));


let str2 = 'говядина';
let str2Index = Math.floor(Math.random() * str2.length);
let govydina = str2[str2Index];
console.log(govydina);



let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while(number < 20){
    console.log(number[0]);
    if (number === 14){
        break
    } 
    number++ ;
}