//Найдите сумму элементов этого объекта.

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sumObj = 0
for(let i in obj){
    for(let j in obj[i]){
        sumObj += obj[i][j]
    }
}
console.log(sumObj)