//Переведите в верхний регистр все нечетные буквы этой строки.
let str = 'abcde';
let str2 = ''


for(let i = 0; i < str.length; i++){
    i % 2 == 0  ? str2 += str[i].toLocaleUpperCase() : str2 += str[i]
}
console.log(str2)