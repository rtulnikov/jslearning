// const arr = [20, 870, 6, 5, 554, 78];

// function buble(arr) {
//     let unsort = arr.length - 1;
//     let sort = false;
//     while (!sort) {
//         sort = true;
//         for (let i = 0; i < unsort; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 sort = false;
//             }
//         }
//         unsort--
//     }

//     return arr;
// }
// console.log(buble(arr));
/**Вывести в консоль числа от 10 до 1000, в которых сумма первых двух цифр == 5 */



// for(let number = 10; number < 1001; number++){
//     let numStr = String(number);
//     if(+numStr[0] + +numStr[1] == '5') console.log(number)
    
// }

// const arr = [121,65,8,565,4,9,5]
// //[121,65] [8,565] [4,9]

// for(let i = 0; i < arr.length; i +=2 ){
//     console.log(arr.slice(i,i+2))
// }

// let str = ''
// for(let i = 0; i < 5; i++){
//     str += '-'
// }
// console.log(str)

// let str = '';
// for(let number = 1; number < 10; number++){
//     str += number
// }
// console.log(str)

// let str = '';
// for(let number = 9; number > 0; number--){
//     str += number
// }
// console.log(str)

// let sum = 0;
// let count = 0;
// for(let number = 1; number < 100; number++){
//         sum += number
//         count++
//           if(sum > 100) break;
// }
// console.log(count)
// console.log(sum)
//1+2+3+4+5 = 15

// let str = ''
// for(let number = 1; number <=5; number++){
//     str += number + '+'
// }

// console.log(str.slice(0,str.length - 1) + ' = 15')