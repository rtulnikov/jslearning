const bodyParts = ["глаз", "нос", "череп","жопа"];
let str = bodyParts.join(' и ');
const numbers = [4, 3, 2, 1];
console.log(numbers.join(' больше, чем '));

console.log(str);


const bodyParts1 = ["глаз", "нос", "череп","жопа", "лапки"];
const adjectives = ["вонючая", "унылая", "дурацкая"];
const words = ["муха", "выдра", "дубина", "мартышка", "крыса"];

let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomWord = words[Math.floor(Math.random() * words.length)];


// let str1 = `У тебя ${randomBodyPart}, как ${randomAdjective} ${randomWord}`;

// console.log(str1 );

const result = [];
result[0] = 'У тебя'
result[1] = randomBodyPart;
result[2] = ', как'
result[3] = randomAdjective;
result[4] = randomWord;


console.log(result.join(' ').replace(' ,', ','));
