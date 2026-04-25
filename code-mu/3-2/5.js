//Найдите сумму элементов этого массива.

let arr = [
	[1, 2, 3,4],
	[4, 5, 6,7],
	[7, 8, 9,10],
]

let arrSum = 0
arr.map(el => el.forEach(element => arrSum += element))
console.log(arrSum)