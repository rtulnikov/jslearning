3.9; /*
Есть функция, которая возвращает текущую дату в виде массива :
function getDateParts() {
  const date = new Date(); // Текущая дата
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()];
}
Нужно через деструктуризацию получить данные из функции и вывести в консоль:
Сегодняшняя дата: 30.07.2025
Чтобы все работало нужно функцию getDateParts скопировать в файл с решением задачи.
EASY
*/

function getDateParts() {
    const date = new Date();
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()];
}

const [getDate, getMonth, getFullYear] = getDateParts();
let date = `Сегодняшняя дата: ${getDate}.${getMonth}.${getFullYear}`;
console.log(date);
