// глобальная область видимости
let date = new Date().toLocaleString("de-DE");

// функциональная область видимости
const getDate = () => {
    let date1 = new Date().toLocaleString("de-DE");
    console.log(date1);
};

//блочная область видимости

const getDate2 = () => {
    var date1 = undefined;
    var zhopa = undefined;

    let a = 2;

    if (a === 2) {
        date1 = new Date().toLocaleString("de-DE");
    } else {
        zhopa = "какая-то жопа";
    }

    console.log(date1, zhopa);
};

getDate2();
const user = {
    name: "Вася",
    surname: "Пупкин",
    getFullName() {
        return this.name + " " + this.surname;
    },
};
console.log(user.getFullName());
