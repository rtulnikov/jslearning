const person = ['Ратмир', 11, ['Москва', 'Каспийская', 28, 4, 31]]
const dima = ['Дима', 4, ['Москва', 'Каспийская', 28, 4, 31, [1,2,3,'кухня']]]

//создание объекта
const obj = {}
const obj2 = new Object()

const ratmir = {
    name:'Ратмир',
    age: 11,
    address: ['Москва', 'Каспийская', 28, 4, 31],
    "номер комнаты": 2, 
}
//получение элементов обьекта по ключу
console.log(ratmir["номер комнаты"])
console.log(ratmir.name)

//измменение значения ключей обьекта
ratmir.name = 'Дима'
console.log(ratmir.name)

//добавление элементов
ratmir["любимая игра"] = "тренировка пяти пальцев"
ratmir.sport = "гонки"

console.log(ratmir["любимая игра"])
console.log(ratmir.sport)
console.log(ratmir)
//удаление элементов
delete ratmir["номер комнаты"]
console.log(ratmir)