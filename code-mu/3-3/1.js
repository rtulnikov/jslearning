//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
let arr = ['дима','пап','он']
let arrBes3Sim = arr.filter(el => el.length <= 3)
console.log(arrBes3Sim)