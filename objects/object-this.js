const greet = function () {
    return "Привет, " + this.name;
};

const dima = {
    name: "дима",
    age: 5,
    greet,
};
const ratmir = {
    name: "ратмир",
    age: 11,
    greet: greet,
};
// console.log(ratmir.greet())
// console.log(dima.greet());

const userActions = {
    run: function () {
        console.log(this.name + " бежит");
    },
    walk() {
        console.log(this.name + " идет");
    },
};
const user = {
    name: "Вася",
    role: "user",
    run: userActions.run,
    walk: userActions.walk,
};
const admin = {
    name: "Петя",
    role: "admin",
    run: userActions.run,
    walk: userActions.walk,
};
const moderator = {
    name: "Коля",
    role: "moderator",
    run: userActions.run,
    walk: userActions.walk,
};
admin.run();
//Привязываем метод к обьекту admin
const adminRun = userActions.run.bind(admin)
adminRun()
const userWalk = userActions.walk.bind(user)
setTimeout(userWalk, 3000);


const italianChef = {
  name: "Марко",
  specialty: "итальянская кухня",
  cookingTime: 20
};

const japaneseChef = {
  name: "Такеши",
  specialty: "японская кухня",
  cookingTime: 15
};

function cookDish(dish, ingredients) {
  console.log(`Повар ... готовит ...`);
  console.log(`Ингредиенты: ...}`);
  console.log(`Время приготовления: ... минут\n`);
  return `... готов!`;
}
