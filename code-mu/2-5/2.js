//Yдалите из этой строки каждый третий символ
let str = 'abcdefg'
let strArr = str.split('')

for(let i = strArr.length; i > 0; i--){
    if(i % 3 === 0){
        strArr.splice(i - 1,1)
    }
}
console.log(strArr)