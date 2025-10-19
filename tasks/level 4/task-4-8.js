/*Написать функцию getWordsLenghts(words), которая принимает масив строк и возвращает новый массив с длинами этих строк. 
Например: 
const words = ["apple", "banana", "cherry"];
// Результат: [5, 6, 6]
Использовать метод map()
EASY
*/
const words = ["apple", "banana", "cherry"];
function getWordsLenghts(arr){
    return arr.map( (event) => event.length)
}
console.log(getWordsLenghts(words))