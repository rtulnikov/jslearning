const animals = ['Тигр','Олень', 'Зубр', 'кот', 'пёс', 'Хорек'];
const birds = ['сава', 'вароно', 'си'];


//объединение массивов
const allArray = animals.concat(birds);
console.log(allArray);

//елементами массива могут быть массивы
const all = [ 
    ['Тигр','Олень', 
        ['акула', 'лосось',],
         'Зубр', 'кот', 'пёс', 'хорек'], 
    ['сава', 'вароно', 'си'] ];


console.log(all[0].length);
//получаем индекс последнего элемента массива
const lastIndex = all[0].length-1;
//делаем из вложенныых массивов один одноуровневый
const allFlat = all.flat(Infinity);
console.log(allFlat);


// all.push(animals);
// all.push(birds);
// all.push('рибо');

// console.log(lastIndex);
// console.log(all[0][lastIndex]);


console.log(all[1][4]  + ', ' + all[1][2]);