//Отсортируйте элементы в каждом подмассиве

//1способ

// let arr = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]


// for(let i = 0; i < arr.length; i++){
// arr[i].sort((a,b) => a - b)
// }
// console.log(arr)

//2 способ

// let arr = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]

// let arrSort = arr.map(el => el.sort((a,b) => a - b))
// console.log(arrSort)