//Удалите из массива все пустые строки.
let arr = [1, '', 2, 3, '', 5];
for(let i = 0; i < arr.length; i++){
    if(arr[i] == '') arr.splice(i,1)
    }
console.log(arr)