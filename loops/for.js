// let number = 1;


// while(number < 11){
//     console.log(number);
//     number++
// } 
// for(let number = 0; number < 11; number+= 2 ) {
//     if (number === 0) {
//         continue
//     }
//     console.log(number);
// } 

let sum = 0;
for(let i = 1; i <= 11;  i++) {
    sum += i
// console.log(sum);
} 
console.log(sum);

let string = 'Дима какашка и балбес';
let words = string.split(' ');
let word =   words[0][0].toUpperCase() + words[0].slice(1);
let word1 =  words[1][0].toUpperCase() + words[1].slice(1);
let word2 =  words[2][0].toUpperCase() + words[2].slice(1);
let word3 =  words[3][0].toUpperCase() + words[3].slice(1);

let result = [];

for(let i = 0; i < words.length; i++) {
console.log(words[i][0].toUpperCase() + words[i].slice(1));
}
for(let elem of words) {
   result.push( elem[0].toUpperCase() + elem.slice(1));
}
console.log(result.join(' '));
for(let i in words) {
    // console.log(words[i][0].toUpperCase() + words[i].slice(1))
console.log(i)
}

//
let numbers = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = [];

for(let elem of numbers) {
numbers2.push(elem);
}
console.log(numbers2);


// выводим цифры от 10 до 1
for(let number = 10; number > 0; number-- ) {
  console.log(number);
}
