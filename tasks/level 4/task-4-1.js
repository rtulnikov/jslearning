/*
4.1
Создать функцию getNumberLessThenMine(), которая принимает два аргумента: массив и число, по умолчанию = 0. Функция должна возвращать
первое по счету число в массиве, которое будет меньше числа, указанного в качестве второго аргумента функции. 
Если такого числа нет - возвращаем undefind.
Использовать метод find().
EASY
*/
const numbers = [3, 7, 2, 10, 5, 0, 8];
const getNumberLessThenMine = (array, number) => {
    //Указать значение по умолчание = 0
    return array.find((elem) => elem < number);
};

console.log(getNumberLessThenMine(numbers));
const letter = "i";
const str = "string";
const result = ["_", "_", "_", "_", "_", "_"];
for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        result[i] = letter;
    }
}
console.log(result.join(" "));
