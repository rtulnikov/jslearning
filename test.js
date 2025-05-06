'use strict'

const fibo = (num) => {
    if(num === 1) return 0;
    if(num === 2 || num === 3) return 1;

    let result = [0,1,1];
    for(let i = 3; i < num; i++){
        result[i] = result[i - 2] + result[i - 1];
    }
    return result.at(-1);
}
const fibo2 = (num) => {
    if(num === 1) return 0;
    if(num === 2 || num === 3) return 1;

    let prev = 1;
    let result = result + prev;
    for(let i = 3; i < num; i++){
        result = result[i - 2] + result[i - 1];
    }
    return result.at(-1);
}

console.log(fibo(9));

const arr1 = [4, 2, 1, 3, 7, 6, 4];

function pivotIndex(arr) {
    let len = arr.length;

    for(let i = 0, left = 0, right = 0; i < len; i++){
        right = arr.slice(i + 1).reduce( (acc, elem) => acc + elem, 0 ) || 0 ;
        left = arr.slice(0, i).reduce( (acc, elem) => acc + elem, 0 ) || 0;
        if(left == right){
            return i;
        }
    }
    return -1;
}
function pivotIndex2(arr) {
    const total = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const rightSum = total - arr[i] - leftSum;
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += arr[i];
    }
    
    return -1;
}
console.log(pivotIndex(arr1))
// function onlyDigits(str) {
// return !isNaN(parseFloat(str)) && isFinite(str);
// }
function onlyDigits(value) {
    if (typeof value === 'number') {
        return Number.isFinite(value);
    }
    
    if (typeof value !== 'string' || value.trim() === '') {
        return false;
    }
    
    // Запрещаем 'e' и 'E' в строке
    if (value.includes('e') || value.includes('E')) {
        return false;
    }
    
    const num = parseFloat(value);
    return !isNaN(num) && isFinite(num) && value.trim() === String(num);
}
console.log(onlyDigits("1234!"));