2.7; /*
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

let result = Math.floor(Math.random() * 10) + 1;
console.log(result);
let userNumber;
console.log(userNumber);

while (result !== userNumber) {
    userNumber = prompt("Угадайте число от 1 до  10");
    console.log(userNumber);

    if (result > userNumber) {
        alert("Больше");
    } else if (result < userNumber) {
        alert("Меньше");
    } else {
        alert("Вы угадали");
        break;
    }
}
