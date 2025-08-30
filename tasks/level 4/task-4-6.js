/*
4.6
Написать функцию checkLetterInArray(words, letter), которая принимает массив слов и букву. И возвращает, содержат ли все
слова в этом массиве эту букву.
const words = ["apple", "grape", "pineapple"];
checkLetterInArray(words, "p") //true
ПОдсказка: дополнительно можно использовать метод includes()
MEDIUM
*/
const words = ["apple", "grape", "pineapple"];

const checkLetterInArray = (words, letter) =>{
    return words.every(word => word.includes(letter));
}
console.log(checkLetterInArray(words, 'b'));