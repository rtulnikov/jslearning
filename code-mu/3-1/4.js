// //Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

//1способ

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// // for(let i = arr2.length; i > arr1.length; i--){
// //     arr2.splice(i - 1,1)
// // }
// console.log(arr2)
// console.log(arr1)

//2способ

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// arr2.length = arr1.length
// console.log(arr1)
// console.log(arr2)

//3способ
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];


let newArr = arr2.slice(0, arr1.length);
console.log(newArr)