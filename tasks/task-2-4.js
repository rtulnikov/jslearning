2.4 /* Фильтрация массива
Дан массив чисел:
let numbers = [3, 7, -2, 10, -5, 0, 8];
С помощью цикла создайте новый массив positives, который будет содержать только положительные числа из исходного массива.
*/
const numbers = [5225, 11111111, -1112, -12210, 42, -0, 81122];
const positives = [];


    for(let i = 0; i < numbers.length; i= i+ 1) {
    if( numbers[i] > 0 ) { 
      positives.push(numbers[i])
    }
    }
console.log(positives);
