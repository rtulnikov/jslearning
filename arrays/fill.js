const createArray = (number) => {
    const array = [];
    for(let i = 0; i < number; i++) {
        array[i] = 1;
    }
    return array;
}

const createArray2 = (number) => {
    const array = new Array(number);
    array.fill(1);
    return array;
}

console.log(createArray2(8))

//создаем массив с 8 элементами
const zhopa = new Array(8);
//заполняем его значениями по диапозону
zhopa.fill(1, 0, 4);
zhopa.fill(2, 4, 8);
//можем заполнить значением полностью
console.log(zhopa);
zhopa.fill(3);
console.log(zhopa)