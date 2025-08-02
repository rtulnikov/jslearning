const PIZZA_PRICE = 600 ;
const DRINK_PRICE = 100;
// создаем отдельные функции для подсчета заказанной пиццы и напитков
const pizzaMoney = (count) => PIZZA_PRICE * count;
const drinkMoney = (count) => DRINK_PRICE * count;

const order = (pizzaCount, drinkCount) => pizzaMoney(pizzaCount) + drinkMoney(drinkCount);

    
console.log(order(5,2))