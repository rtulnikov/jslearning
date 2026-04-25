//Удалите из этой строки каждое второе слово
let str = 'aaa bbb ccc eee fff ggg hhh'
let strArr = str.split(' ');

let arrBesTwo = strArr.filter((_,i) => (i + 1) % 2 != 0)

console.log(arrBesTwo)