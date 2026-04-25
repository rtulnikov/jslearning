//Проверьте, что это слово читается одинаково с любой стороны.

let str = 'abcbab'
let strArr = str.split('');

str == strArr.reverse().join('') ? console.log(true) : console.log(false)

