//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
let arr = [10,5,800,758,40,50]

let result = arr.filter(el => String(el).includes('0'))
console.log(result)