/*Создать функцию getMinNumber(), которая принимает в качестве аргумента массив чисел. С помощью метода reduce() найти минимальный элемент
этого массива и вывести в консоль.
*/
const numbers = [4, 7, 2, 10, 5, 4, 8, 1];

const getMinNumber = (array) => {
    return array.reduce((acc, elem) => (acc < elem ? acc : elem));
};
console.log(getMinNumber(numbers));
