2.7 /*
Напишите простую игру "Угадай число". Программа "загадывает" случайное число от 1 до 10. 
Пользователь пытается его угадать, вводя число через prompt. Если он угадал — выводится сообщение Вы угадали!.

Пример:
Угадайте число от 1 до 10
Введите число: 5 ( а загаданное число меньше 5)
Меньше
Введите число: 3 (а загаданное больше 3 , т.е - 4)
Больше
Введите число: 4
Вы угадали!
*/

// let randomNumber = prompt('Ты играешь в игру угадай число от 1 до 10')
// const random = Math.ceil(Math.random() *10);

// if(randomNumber == random) {
//     alert('Ты угадал!')
// } else if(randomNumber < random) {
//     alert('Лошара! Не угадал! Больше!')
//     prompt('Ты играешь в игру угадай число от 1 до 10')
// } else if(randomNumber > random) {
//     alert('Лопух! Не угадал! Меньше')
//     prompt('Ты играешь в игру угадай число от 1 до 10')
// }

let random = Math.floor(Math.random() * 10 + 1);
let randomNumber = prompt('угадайте число от 1 до 10');
// while(random != randomNumber) {
//     if(random === randomNumber) {
//     alert('Ты угадал');
//     };
//    if(random < randomNumber) {
//     alert(random)
//      alert('больше');
//      prompt('угадай число от 1 до 10');
//    }else if(random > randomNumber) {
//     alert(random)
//     alert('меньше');
//     prompt('угадай число от 1 до 10');
//    };
//    };

