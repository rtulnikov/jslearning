//первый способ
//Дано число. Выведите в консоль количество четных цифр в этом числе.
let number = 1286759;
number = String(number)

let count = 0
for(let i = 0; i < number.length; i++){
    if(+number[i] % 2 == 0) count += 1
}
console.log(count)

//второй способ
// let number = String(128675948).split('');

// let chetArr = number.filter(elem => {
//    return +elem % 2 == 0
// })

// console.log(chetArr.length)