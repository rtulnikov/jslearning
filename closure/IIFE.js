"use strict";

//IIFE
let cnt = (function() {
    let number = 0;
    return function () {
        number++;
        console.log(number);
    }
})()

cnt()
cnt()
cnt()
