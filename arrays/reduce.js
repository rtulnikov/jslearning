let numbers = [45, 2, 65, 58, 10];
let sum = 0;
for (let elem of numbers) {
    sum += elem;
}

console.log(
    numbers.reduce((acc, elem, index, aarray) => {
        console.log(acc, elem, index, aarray);
        return acc + elem;
    }, 0)
);
let avg = numbers.reduce((acc, elem, index) => {
    console.log(acc, elem, index);
    if (index == numbers.length - 1) {
        return (acc + elem) / numbers.length;
    } else {
        return acc + elem;
    }
});
// console.log(avg)

const words = ["JavaScript", "is", "poo"];
console.log(words.join(" "));

let result = "";
for (let i = 0; i < words.length; i++) {
    result += words[i] + " ";
}

const jh = words.reduce((acc, elem) => (acc += " " + elem));

numbers = [45, 2, 65, 58, 10];
acc  = 0;
// for (let elem of numbers) {
//     acc += elem
// }
// console.log(sum)
const sumw = numbers.reduce((acc,elem) =>{
    console.log(acc,elem)
    acc += elem
    return acc
})
console.log(sumw)
