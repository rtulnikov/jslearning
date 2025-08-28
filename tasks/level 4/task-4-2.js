/*Создать функцию even(), которая принимает массив чисел и возвращает первое четное число. Для реализации использовать 
метод findIndex().
*/
const numbers = [3, 7, 2, 10, 5, 0, 8];

const even = (array) =>{
    return array.findIndex((elem) => elem  % 2 === 0)
}

console.log(even(numbers));