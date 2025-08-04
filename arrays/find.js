const numbers = [2, 10, -45, 9, -52, 0, 14, 2, 7];

//находим первое отрицательное значение массива
console.log(numbers.find( (elem) => elem < 0));

//находим индекс первого отрицательного элемента массива
console.log(numbers.findIndex( (elem) => elem < 0));

//проверяем, что хотя-бы один элемент массива четный
console.log(numbers.some( (elem) => elem % 2 != 0))
