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


//как нельззя делать названия свойств, только строкой ''
let obj1 = {
	'1a': 1,
	b2: 2,
	'c-c': 3, 
	'd 4': 4,
	e5: 5
};

//создание ключей через вычисляемые свойства

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj23 = {[key1]: 1, [key2]: 2, [key3]: 3};