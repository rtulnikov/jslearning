//Yдалите из этой строки каждый третий символ
let str = 'abcdefg'
let strArr = str.split('')

for(let i = 0; i < strArr.length; i++){
    if(i != 2){
        strArr.splice(i,1)
        i = 0
    }
}
console.log(strArr)