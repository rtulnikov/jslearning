// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = '1';
// let num2 = '2';

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num1 = '1';
// let num2 = '2';

// if (Number(num1 + num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// let num = 123;

// if (num[0] === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;

// if (String(num[0]) === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// console.log(String(num[0]))

// let num = 123;

// if (String(num)[0] === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// console.log(typeof String(num)[0])

// Код должен проверить первую цифру числа:

// let num = 123;
// let first = String(num)[0];

// if (Number(first) === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// Код должен проверить, что в числе ровно две цифры:

// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// Код должен проверить, что в числе ровно две цифры:

// let num = 12;
// let str = String(num);

// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// Код должен проверить, что в числе ровно две цифры:

// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

console.log(sum1)
console.log(sum2)