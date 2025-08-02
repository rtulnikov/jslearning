const numbers = [2, 10, -45, 9, -52, 0, 14, 2, 7];

const moreThanFive = (array) => {
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 5) {
            result.push(array[i]);
        }
    }
    return result;
};

const lessThanZero = (array) => {
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            result.push(array[i]);
        }
    }
    return result;
};
const isEven = (array) => {
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i]);
        }
    }
    return result;
};
const isOdd = (array) => {
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 != 0) {
            result.push(array[i]);
        }
    }
    return result;
};

//создаем общую функцию, в которую передаем массив и фильтурующую функцию
const filter = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

//создаем фильтрующие стрелочные функции
const isOdd2 = number => number % 2 != 0;
const isEven2 = number => number % 2 == 0;
const lessThanZero2 = number => number < 0;
const moreThanFive2 = number => number > 5;

console.log(moreThanFive(numbers));
console.log(isEven(numbers));
console.log(filter(numbers, (number) => number % 2 != 0));
