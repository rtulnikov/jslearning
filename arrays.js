// const animals = ['Тигр','Олень', 'Зубр', 'Хорек'];
// const str = 'Дима спит';
// console.log(str.length);
const animals = [];
animals.push('Тигр');
animals.push('Собака');
animals.push(57);
animals.push(true)
animals.push('Кошка');
animals.unshift('Рысь'); 
console.log(animals);

// let cat = animals.pop();
// let rise = animals.shift();
let hk = animals.at(-1);
let sl = animals.slice(1,3);

console.log(animals );
console.log(sl);
console.log(hk);
console.log(animals[0]);
// console.log(rise);
console.log(animals.pop());
console.log(animals);
// console.log(animals[1].length);
