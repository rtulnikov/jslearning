/*
В файле array objects.js мы написали код, который обрабатывает массив объектов и выводит все его свойства и их значения:
array.forEach((elem) => {
    Object.entries(elem).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log();
});
Нужно написать функцию getAttributes(arr), которая принимает массив объектов и возвращает все его свойства и значения.
Вместо
    Object.entries(elem).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
использовать цикл for ..in.
EASY
*/
const person = {
  name: 'Дима какашка',
  age: 25,
  isStudent: true
};

function getAttributes(obj){

    for (let key in obj) {
  console.log(`${key}:, ${obj[key]}`);

}
}
console.log(getAttributes(person))