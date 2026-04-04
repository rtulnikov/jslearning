//Сделайте заглавным первый символ каждого слова в этой строке.

let str = 'aaa bbb ccc'
let strArrStr =  str.split(' ')
let newStr = ''

function up(strArr){
        for(let i = 0; i < strArr.length; i++){
       newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1) + ' '
    }
    return newStr
}
console.log(up(strArrStr))