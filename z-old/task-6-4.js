const str = 'топ';

// function lecsus(str){
//     const strRev = str.split('').reverse().join('')
//     return str === strRev ? true : false;

// }
// console.log(lecsus(str))

// let letter = '';
// function rigth(str){
//     for(let i = str.length - 1; i >= 0; i--){
//         letter += str[i] 
//                 console.log(letter)
//     }
//     return str == letter ? true : false
// }
// console.log(rigth(str))

function prosti(str){
    for(let i=0, j = str.length - 1; i < j; i++, j--){
        if(str[i] !== str[j]){
            return false
        }
    }
    return true

}
console.log(prosti(str))