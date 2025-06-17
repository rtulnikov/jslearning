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
let rank = ranks[Math.floor(Math.random() *ranks.length)];
let randomIndex = ranks[rank];
console.log(rank);




// if (rank === 'рядовой') {
//     let exp = 10; 
//     let damage =  exp > 5 ? 30 : 25;
//     console.log('Выполняйте приказ! Защитите позицию! Ваш урон ' + damage );
//     } else  if (rank === 'сержант') {
//         console.log('Доложите о готовности! Вы ведущий в бой.')
//     } else  if (rank === 'лейтенант') {
//         console.log('Ваша задача — координация! Направляйте подразделения.')
//     } else {
//         console.log('Неизвестное звание. Ждите подтверждения...')
//     };

switch (rank) {
   case 'рядовой' : 
    let exp = 10;
    let damage = exp > 5 ? 30 :25 ;
    console.log('Выполняйте приказ! Защитите позицию! Ваш урон ' + damage);
    break
    case 'сержант' : 
    console.log('Доложите о готовности! Вы ведущий в бой.')
    break
    case 'лейтенант' : 
    console.log('Ваша задача — координация! Направляйте подразделения.')
    break
    default : 
     console.log('Неизвестное звание. Ждите подтверждения...')
};