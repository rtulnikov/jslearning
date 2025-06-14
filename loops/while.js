let  number = 10;
while(number < 20){
    console.log(`Привет ${number}`);
    // прерываем цикл
    if (number === 14){
        break
    } 
    number++ ;
}
console.log('Цикл завершён');

const animals = ['Тигр','Олень', 'Зубр', 'Хорек', 'Лось', 'Собака'];
 let index = 0;

 while (index < animals.length) {
    if (index === 2) {
       index++;
        continue;
    }else {
        console.log(animals[index]);
    }
    index++;
 }

 let age = 0;
 while(age < 13) {
    age = prompt('Введите ваш возраст');
 }
 document.write('Ты большая какашка');

 let numbers = [1, 2, 3, 4, 5, 6,7,8,9,10];
 let ind = 0;
 let sum = 0;
while(ind < numbers.length) {
  sum =  numbers[ind] + sum
  ind++ ; 
console.log(sum);
}