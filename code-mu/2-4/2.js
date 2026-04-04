//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
//первый способ
let obj = {
    password:1234,
    name: 'balbes',
}
// let keys = Object.keys(obj)
// let values = Object.values(obj)

//второй способ
let keys = []
let values = []

for(i in obj){
    keys.push(i)    
    values.push(obj[i])    
}
console.log(keys,values)