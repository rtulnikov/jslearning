                       1

// const arr = [1, 2, 3];

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(arr.length === 3 ? arrSum(arr) : "там не 3 элемента"

                               2

// const str = 'esdbf'
// const strArr = str.split('')

// console.log(strArr[0] ==='a' ? 'первым идет a' : 'первым не идет a')

                 3
// const number = 12345;

//более короткое решение (от иишки)
// const firstNumber = String(number)[0]
// console.log('123'.includes(firstNumber) ? "все хорошо" : "все плохо")

// //мое решение
// console.log(
//     String(number)[0] === "1" ||
//         String(number)[0] === "2" ||
//         String(number)[0] === "3"
//         ? "все хорошо"
//         : "все плохо",
// );

                       4
//мое решение

// const number = 333333

// let firstThreeNumb = 0
// let secondThreeNumb = 0

// for(let i = 0; i < 3; i++){
//     let firstnumb = String(number)[i]
//     firstThreeNumb += +firstnumb
// }

// for(let i = -1; i > -4; i--){
//     let firstnumb = String(number).at(i)
//     secondThreeNumb += +firstnumb
// }
// console.log( firstThreeNumb === secondThreeNumb ? 'они совпадают' : 'они не совпадают')

//решение иишки

// const number = 333333;
// const str = String(number);

// let firstThreeNumb = 0;
// let secondThreeNumb = 0;


// for(let i = 0; i < 3; i++){
//     firstThreeNumb += +str[i]; 
// }


// for(let i = 1; i <= 3; i++){
//     secondThreeNumb += +str.at(-i); 
// }

// console.log(firstThreeNumb === secondThreeNumb ? 'они совпадают' : 'они не совпадают');

// let sum = 0;
// for(let num = 1; num < 101; num++){
//     sum += num
// }
// console.log(sum)