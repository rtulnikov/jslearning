/*
4.5
Создать функцию checkCapitalLetter(words), которая будет принимать массив слов и проверять, начинается ли хотя бы одно из них
с большой буквы.
Пример:
const words = ["apple", "banana", "Cherry"]; 
checkCapitalLetter(words) //true
EASY
*/
const words = ["apple", "banana", "Cherry"]; 

const checkCapitalLetter = (words) =>{
   return words.some((elem) => {
        return elem.length > 0 && elem[0] === elem[0].toUpperCase();
    })
}
console.log(checkCapitalLetter(words));

