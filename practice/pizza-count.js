const PIZZA_PRICE = 600 ;
const DRINK_PRICE = 100;
// создаем отдельные функции для подсчета заказанной пиццы и напитков
const pizzaMoney = (count) => PIZZA_PRICE * count;
const drinkMoney = (count) => DRINK_PRICE * count;

const order = function (pizzaCount, drinkCount) {
    //используем созданные функции для подчета пиццы и напитков
    // передаем туда количество
    let pizza = pizzaMoney(pizzaCount);
    let drink = drinkMoney(drinkCount);
    return pizza + drink;
}
    
console.log(order(5,2))

console.log(pizzaMoney(3) + drinkMoney(2));