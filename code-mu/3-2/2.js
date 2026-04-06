//Дан массив. Удалите из него каждый пятый элемент.
// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = arr.length; i > 0; i--){
//     if(i % 5 === 0){
//         arr.splice(i - 1,1)
//     }
// }
// console.log(arr)

//2способ

let arr = [1,2,3,4,5,6,7,8,9,10]
let arrBesfiveEl = arr.filter((_,i) => (i + 1) % 5 != 0)
console.log(arrBesfiveEl)