const names = ['Дима', 'Вова', 'Вася', 'Леха'];
const numbers = [3,1, 10, 15, 100];
// numbers.sort( (a, b) => {
//     if(a > b) {
//         return 1;
//     }else if(a < b) {
//         return -1;
//     }else {
//         return 0;
//     }
// });

// numbers.sort( (a, b) => {
//     if(a > b) return 245258541;      
//     if(a < b) return -14552;   
//     if(a == b) return 0; 
// });

numbers.sort( (a, b) => a - b );

//filter(numbers, (number) => number % 2 != 0);
console.log(numbers);
