const number = [6, 2, 85, 6];
let  str = '';
// if (number[0] > 10) {
// str = number[0] + ' больше десяти';
// } else {
//   str =  number[0] + ' меньше десяти';
// };

str = number[2] > 10 ? number[2] + ' больше десяти' : number[2] + ' меньше десяти';

console.log(str);

// 1.У тебя есть переменная targetDestroyed, которая может быть true или false. Напиши код, который выводит:
// Если цель уничтожена → "Цель уничтожена!"
// Иначе → "Стрелять ещё!"

let targetDestroyed = false;
if (targetDestroyed) {
    console.log('Цель уничтожена');
} else {
    console.log('Стреляй еще')
};

targetDestroyed ? console.log('Цель уничтожена') : console.log('Стреляй еще'); 

let ranks = ['рядовой', 'сержант', 'лейтенант'];
console.log(ranks)

// const rank = ranks[2];
let index = Math.floor(Math.random() *ranks.length);
let rank = ranks[index];

let damage = 25;
let exp = Math.floor(Math.random()  *10 +1);
let crit = exp > 7 ? 1.75 : 1.25;
switch (rank) {
    case 'рядовой' : 
        damage =  exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Выполняйте приказ! Защитите позицию! Ваш урон ' + damage);
        break
    case 'сержант' : 
        damage = 30;
        damage = exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Доложите о готовности! Вы ведущий в бой. Ваш урон ' + damage)
        break
    case 'лейтенант' :
        damage = 35; 
        damage = exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Ваша задача — координация! Направляйте подразделения. Ваш урон ' + damage)
        break
    default : 
        console.log('Неизвестное звание. Ждите подтверждения...')
};