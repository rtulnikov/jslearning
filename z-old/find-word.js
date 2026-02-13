const str = 'Я забрал у Димы котика';
const str1 = 'Когда придет котик?';
const str2 = 'Дима балбес,кака-ляля,балбес,какашка,обосун.';

console.log(str1.indexOf(' '));
console.log(str.slice(str.lastIndexOf(' ')), str1.slice(0, str1.indexOf(' ')), str2.slice(0, str2.indexOf(' ')));
