const luser = {
    name: "петя",
    age: 5,
    address: {
        city: "Симферопль",
        street: "Кортенская", 
        house: 12,
        building: 7,
        flat: 57
    },
    "номер комнаты": 6,
};
//получаем ключи обьекта
console.log(Object.keys(luser));
console.log(Object.keys(luser.address));
//получаем значения
console.log(Object.values(luser.address))
//получаем все сразу
console.log(Object.entries(luser))

//считаем количевство ключей циклом
let sum = 0;
for(let key in luser) {
    sum += 1;
    console.log(key)
};
console.log(sum)

//через длину массива
console.log(Object.keys(luser).length)