/*
Написать функцию getNumbersMoreThanMine(numbers, num), которая принимает массив чисел и отдельное число. И возвращает новый
массив, в котором будут только те числа массива, которые больше переданного в качестве второго аргумента.
Например:
const numbers = [10, 20, 5, 30];
getNumbersMoreThanMine(numbers, 15)
// Результат: [20, 30]
Использовать метод filter
EASY
 */

const numbers = [10, 20, 5, 30];


const getNumbersMoreThanMine = (array,word) => {
   return array.filter( (elem) => elem > word)
}
console.log(getNumbersMoreThanMine(numbers,10))