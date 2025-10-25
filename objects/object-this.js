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
    run: function (dest,how) {
        console.log(`${this.name} бежит ${dest} ${how}`);
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
    // run: userActions.run,
    // walk: userActions.walk,
};
admin.run();
//Привязываем метод к обьекту admin
const adminRun = userActions.run.bind(admin)
adminRun()
const userWalk = userActions.walk.bind(user)

userActions.run.call(moderator,'в магазин', 'быстро')
userActions.run.apply(moderator,['в школу','нехотя'])

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
  console.log(`Повар ${this.name} готовит ${dish}`);
  console.log(`Ингредиенты: ${ingredients.join(', ')}`);
  console.log(`Время приготовления: ${this.cookingTime} минут`);
   console.log(`${dish} готово! \n`);
   return true
}
cookDish.call(italianChef,'фетуччини',['спагетти','вечина','сливки'])
cookDish.apply(japaneseChef,['суши',['рыба','рис','морская капуста']])

const coockSushi = cookDish.bind(japaneseChef,'суши',['рыба','рис','морская капуста'])
coockSushi()
setTimeout( coockSushi, 3000)

