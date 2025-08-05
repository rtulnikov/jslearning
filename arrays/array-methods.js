const numbers = [2, 10, -45, 9, -52, 0, 14, 2, 7];

//находим первое отрицательное значение массива
console.log(numbers.find( (elem) => elem < 0));

//находим индекс первого отрицательного элемента массива
console.log(numbers.findIndex( (elem) => elem < 0));

//проверяем, что хотя-бы один элемент массива четный
console.log(numbers.some( (elem) => elem % 2 != 0))

//проверяем, что все элементы массива удовлятворяют условию 
console.log(numbers.every( (elem) => elem > 0))

//проверяем включает ли массив элемент равный -45
console.log(numbers.includes( -45))

//то же самое только с методом some
console.log(numbers.some( (elem) => elem == -45))

//делаем что-нибудь с каждым элементом массива
//возвращает undefined и не работают break и continue
numbers.forEach( (elem) => console.log(elem) );

//делаем то же с помощью цикла
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//фильтруем элементы  массива с помощь callback функции
console.log(numbers.filter( (elem) => elem %2 != 0 ))

//сделаем что-то скаждым элементом массива возвращаем новый массив
console.log(numbers.map( (elem) => elem * 2 ))

//фильтруем массив и умножаем все на 10
let evenTimesTen = numbers.filter( (elem) => elem % 2 == 0 ).map( (elem) => elem * 10)
console.log(evenTimesTen)