//возведенние в степень
let two = 2;
console.log(Math.pow(two,9));
console.log(two**3);
console.log(Math.pow(9,9), 2**9);


let minus_three = -3;
console.log(Math.abs(minus_three), -3*-3);


// округление 
// математическое
const myRussianMark = 3.99;
console.log(Math.round(myRussianMark));
//до большего числа
console.log(Math.ceil(myRussianMark));
//до меньшего числа
console.log(Math.floor(myRussianMark));
console.log(myRussianMark.toFixed());

//квадратный корень
const twentysix = 26
console.log(Math.sqrt(26));

//получение случайного числа
console.log( Math.floor(Math.random () *3));

console.log(Math.random() *0,4);

console.log(Math.floor( 1.005294942849736 ));
console.log(Math.ceil(Math.random() *5));