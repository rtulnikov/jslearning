//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
let str = 'apple,ban,ant,hisory'

let result = str.split('').filter(el => el[0] == 'a');
console.log(result)
