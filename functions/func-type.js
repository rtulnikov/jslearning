console.log(sum2(12,5))

// стрелочная функция
// если ставим фигу рные скобки то обязательно return
const sum = (a, b) => a + b;

// анонимные  функции 
const sum1 = function(a, b){
    return a + b;
}

console.log(sum1(243, 2215))

// стандартная функция
function sum2 (a,b) {
    return a + b;
} 

//Imidiate Invoked Function Expression (IIFE)
(function() {
    console.log("Hello, Ratmir!");
})()