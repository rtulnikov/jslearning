'use strict'

let a = 1;
let b = 2;

// let tmp = a
// a = b
// b = tmp 

// [b,a] = [a,b]

let arr = [45,35,3, 121, 54,55,2];

[arr[1],arr[0]] = [arr[0],arr[1]] 

console.log(arr)

function bubleSort(arr){
    let unsort = arr.length - 1;
    let sort = false;
    while(!sort){
        sort = true
    for(let i = 0; i < unsort; i++){
        if(arr[i] > arr[i+1]) {
            [arr[i+1], arr[i]] = [arr[i], arr[i+1]]
            sort = false
        }
        
    }
    unsort--
}
    return arr
    
}
console.log(bubleSort(arr))