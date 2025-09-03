const student1 =   { name: "Анна", age: 20 }
const student2 =   { name: "Марк", age: 22 }
const skills =     {skill1: 'HTML', skill2: 'js', skiil3: 'Java'}

//копируем обьект черех спрэд операттор
let studentCopy1 = {...student1}
//через Object.assign 
let studentCopy2 = {}
Object.assign(studentCopy2,student2)
student1.name = 'петя'
console.log(student1,studentCopy1)

student2.age = 425168543
console.log(student2,studentCopy2)

//обьединение объектов
const result = {...student1,...skills}
console.log(result)

//проблема

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

const luserCopy = {...luser}

luser.address.street = 'Севанская'
console.log(luser,luserCopy)
luser.name = 'пертя'
console.log(luser,luserCopy) 