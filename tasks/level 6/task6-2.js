"use strict";

// const arr = [0, 25, 45];
// const arr1 = [0, 25, 3, 45];

// function includesThree(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (3 == arr[i]) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(includesThree(arr));

// [arr, arr1].forEach((arra) => {
//     if (includesThree(arra))
//         console.log(`в массиве ${[arra.toString()]} есть 3`);
//     else {
//         console.log(`в массиве [${arra.toString()}] нет 3`);
//     }
// });

// const arrOtris = [53, 52, 54, 102, -82];

// function otris(arrPolosh) {
//     for (let i = 0; i < arrPolosh.length; i++) {
//         if (arrPolosh[i] < 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(otris(arrOtris));


// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);

// let num = 10;
// num++;
// num++;
// num--;
// console.log(num);

// let num = 3;
// console.log(++num);
// console.log(num++);

// let num = 3;
// console.log(--num);
// console.log(num--);

// let num1 = 3;
// let num2 = ++num1;
// console.log(num1);
// console.log(num2);

// let num1 = 3;
// let num2 = num1++;
// console.log(num1);
// console.log(num2);

// let num1 = 3;
// let num2 = num1--;
// console.log(num1);
// console.log(num2);

// let arr = ['a', 'b', 'c', 'd'];

// console.log(arr.join('+'))

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'c-c': 3, 
// 	'd 4': 4,
// 	e5: 5
// };

let key = 'x';


// obj['x'] *= obj['x'] 
// obj['y'] *= obj['y'] 
// obj['z'] *= obj['z']

// console.log(obj)
// console.log(obj[key])


// let key1 = '1x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {[key1]: key1, [key2]: 2, [key3]: 3};


// console.log(obj)

// let test1 = '123';
// let test2 = 123;
// if(+test1 === +test2) {
//     console.log(true)
// }else{
//     console.log(false)
// }

// let test = 0

// console.log(!test ? true : false)

// let test = -1;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// let test1 = true;
// let test2 = true;

// console.log(!!test1 && test2 ? true : false)

let day = 20;

if(day >= 1 && day <= 31){
  if(day <= 10) {
    console.log('в первую декаду')
}else if (day <= 20){
    console.log('в вторую декаду')
}else{
    console.log('в третью декаду')
}  
}else{
    console.log('ошибка')
}
