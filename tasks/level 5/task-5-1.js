/*
Создайте объект person, который содержит следующие свойства:
    name : имя человека.
    age : возраст человека.
    isStudent (логическое значение): является ли человек студентом (true/false).
Добавьте в объект person новое свойство hobbies — массив с увлечениями человека. Например: 'Чтение', 'Плавание', 'Программирование']
Измените значение свойства age объекта person на новое значение, например, увеличьте его на 5.
Выведите все свойства объекта person в консоль двумя способами: через цикл for ..in,  и с помощью forEach, перведя объект в массив.
Удалите свойство isStudent из объекта person.
Создайте новый объект newPerson, который является копией объекта person. Измените одно из свойств в newPerson и убедитесь, 
что изменения не повлияли на объект person.
*/

const person = {
  name: 'Дима какашка',
  age: 25,
  isStudent: true
};

person.hobbies = ['кибер спорт'];

person.age += 11;

for (let key in person) {
  console.log(`${key}:`, person[key]);
}

Object.entries(newPerson).forEach( ([key, value]) => {
    console.log(`${key}: ${value}`)
})

delete person.isStudent

const newPerson = { ...person };

delete person.name;

newPerson.age = 20

