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

// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

// let sum1 = num[0] + num[1] + num[2];
// let sum2 = num[3] + num[4] + num[5];

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

// console.log(sum1)
// console.log(sum2)


//как решил я 
// let str = '104840';

// let firsZero = str.indexOf(0)
// console.log(firsZero)
//как решила иишка

// let str = '104840';

// let firsZero = str.indexOf('0')
// console.log(firsZero)

//как решил я

// for(let i = 0; i<1001; i++){
//     let strI = String(i);
//     if(+strI[0] + +strI[1] == 5) console.log(strI)
// }

//как решила иишка
// for(let i = 0; i<1001; i++){
//     let strI = String(i);
//     if(+strI[0] + +strI[1] == 5 || strI[0] == 5 && strI[1] == undefined) console.log(strI)
// }

// //как решил я 
// const arr = [1,2,3,1];

// while(arr.includes(1)){
//     arr.splice(arr.indexOf(1),1)
// }
// console.log(arr)

//как решила иишка
// const arr = [1, 2, 3, 1];
// const valueToRemove = 1;

// const result = arr.filter(item => item !== valueToRemove);

// console.log(result);

//как решил я

// const arr = [1,2,3,4,5,6,7];
// let arrLen = Math.floor(arr.length /2)
// let result = 0;

// for(let i = 0; i < arrLen; i++){
//     result += arr[i]
// }
// console.log(result)

//как решила иишка
//она сказала все хорошо

//как решил я

// let arr = [-10,5,-69,52,67];
// let result = 0

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0) result += 1
// }
// console.log(result)

//как решил я

// let arr = [1,-86,434,-8]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0) {
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

//как решил я (исправлено)
// let arr = [1,-86,-434,-8]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0) {
//         arr.splice(i,1)
//     i -= 1
//     }
// }
// console.log(arr)


//как решила иишка
// let arr = [1, -86, 434, -8, -2, -5];
// let result = arr.filter(item => item >= 0);

// console.log(result);

//как решил я
// let str = 'мамам'.split('')
// str.splice(str.length - 2,1)
// console.log(str.join(''))

//как решил я
// let arr = [1,2,3,4,5,6]
// let resFirPol = 0
// let resSecPol = 0


// for(let i = 0; i < arr.length /2; i++){
//     resFirPol += arr[i]
// }
// for(let i = arr.length - 1; i >= arr.length /2; i--){
//     resSecPol += arr[i]
// }

// let result = resFirPol / resSecPol
// console.log(result)

//как решила иишка
// она сказала что все хорошо но чтобы сэкономить время лучше сделать так
// let arr = [1, 2, 3, 4, 5, 6];
// let sumFirst = 0;
// let sumSecond = 0;
// let mid = arr.length / 2;

// for (let i = 0; i < arr.length; i++) {
//     if (i < mid) {
//         sumFirst += arr[i];
//     } else {
//         sumSecond += arr[i];
//     }
// }

// console.log(sumFirst / sumSecond);

//как решил я
// let firStr = 'железо'
// let secStr = 'оно'
// if(firStr.at(-1) === secStr[0]) console.log('все совпадает')


// let str = '00883'
// let count = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i] === '0') count += 1
//     if(count === 3) {
//         console.log(i)
//         break;
//     }
// }
// if(count < 3) console.log('тут нет 3-ео нуля')

// let str = '12,34,56,78'.split(',')
// let result = 0
// for(let i =0; i<str.length; i++){
//     result += +str[i]
// }

// console.log(result)

// let data = '2025-12-06'.split("-")
// const [year,month,day] = data

// const obj = {
//     year,
//     month,
//     day,
// }
// console.log(obj)

// let str = 'a 5b'
// for(let i = 0; i < str.length; i++){
//     if (str[i].trim() !== '' && !isNaN(+str[i])) {
//         console.log(i)
//     break;
//     }
// }
// for(let i = 0; i < str.length; i++){
//     if(str[i] >= 0 || str[i] < 0){
//         console.log(i)
//         break
//     }
// }