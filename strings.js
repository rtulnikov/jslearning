let ass = "Дима кака-ляля и балбес";
let rat = "Рат";
let mir = "мир";
let two = 2;

console.log(rat + mir, ass.slice(5));

console.log(ass.slice(17));

console.log(ass.slice(0,4).toLowerCase());

console.log(ass.slice(0,4).toLowerCase().length );

let string = "я каКая-То кРиваЯ стрОка";
//Я какая-то кривая строка
let ni = rat.concat( mir);
console.log(ni);
let part = string.slice(11).toUpperCase().replaceAll('А','О') ;
console.log(part);
let hu =   'Дима хватит спать';
console.log(hu.trim().lastIndexOf('и') );
console.log(hu.at(-1));
