"use strict";

let arr = [45, 35, 3, 121, 54, 55, 5];

function selectionSort(arr) {
    let lowest = 0;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k + 1] < arr[k]) lowest = arr[k + 1];
    }
    return arr;
}
console.log(selectionSort(arr));
