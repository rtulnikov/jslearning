"use strict";

let arr = [45, 35, 3, 121, 54, 55, 5];

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowestNumberIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[lowestNumberIndex]) lowestNumberIndex = k;
        }
        if (lowestNumberIndex != i) {
            [arr[lowestNumberIndex], arr[i]] = [arr[i], arr[lowestNumberIndex]];
        }
    }
    return arr;
}
console.log(selectionSort(arr));
