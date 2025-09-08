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

// const name = luser.name;
// const age = luser.age;
// const city = luser.address.city;
// console.log(name,age,city)
const {age,name} = luser
console.log(age,name)