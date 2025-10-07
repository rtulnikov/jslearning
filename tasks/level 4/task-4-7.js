/*
Написать функцию, checkUnicNumbers(array), которая принимает массив цифр и проверяет все ли цифры там уникальные.
const numbers = [1, 2, 3, 4];
// Результат: true

const numbers2 = [1, 2, 3, 3];
// Результат: false
Подсказка: число уникально, если его первый индекс совпадает с текущим индексом. Метод every() принимает коллбэк функцию,
которая в качестве второго аргумента может принимать индекс - every( (elem, index) => { return})
MEDIUM
*/

const numbers2 = [1, 2, 3, 4];
const checkUnicNumbers = (array) => {
    return array.every((elem, index) => array.indexOf(elem) === index);
};

console.log(checkUnicNumbers(numbers2))