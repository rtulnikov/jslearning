/*
4.10
Написать функцию getCapitalWords(words), которая принимает массив строк и возвращает новый массив с этими же строками
в верхнем регистре.
const words = ["apple", "banana", "cherry"];
// Результат: ["APPLE", "BANANA", "CHERRY"]
Использовать метод map
*/

const words = ["apple", "banana", "cherry"];
const getCapitalWords = (words) => {
    return words.map( (elem) => elem.toUpperCase())
}
console.log(getCapitalWords(words))