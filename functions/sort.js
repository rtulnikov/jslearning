const names = ["Дима", "Вова", "Вася", "Леха"];
const numbers = [3, 1, 10, 15, 100];
numbers.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

// numbers.sort( (a, b) => {
//     if(a > b) return 245258541;
//     if(a < b) return -14552;
//     if(a == b) return 0;
// });

console.log(numbers.sort((a, b) => a - b));

//filter(numbers, (number) => number % 2 != 0);
console.log(numbers.sort());
const arr = [[1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4]];
// arr.sort( (a,b) => a.length - b.length)

console.log([...arr].sort((a, b) => a.length - b.length));
console.log(arr);

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);
