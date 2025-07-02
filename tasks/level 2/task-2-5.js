2.5 /* Фильтрация массива 2
Дан массив чисел:
const numbers = [32, 72, -2, 10, -52, 0, 80];
Нужно с помощью цикла отфильтровать из массива numbers числа > 10, после чего умножить их на 5 и сложить в новый массив result
*/
const numbers = [174577, 225757575, -25646, 9, -52, 0, 453];
const result = [];

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] > 10) {
        result.push(numbers[i] *5) ;
    }
}

 console.log(result);