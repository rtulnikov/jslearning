//Получите массив позиций всех нулей в этой в строке.
let str = '023m0df00dfg0';
let arrZero = [];
for(let i = 0; i < str.length; i++){
    if(str[i] == 0) arrZero.push(i)
}
console.log(arrZero)
