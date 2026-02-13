const bodyParts = ["глаз", "нос", "череп","жопа"];
const adjectives = ["вонючая", "унылая", "дурацкая"];
const words = ["муха", "выдра", "дубина", "мартышка", "крыса"];


// let randBodyPartsIndex = Math.floor(Math.random() * bodyParts.length);
// let randomAdjectivesIndex = Math.floor(Math.random() * adjectives.length);
// let randomWordIndex = Math.floor(Math.random() * words.length);

let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomWord = words[Math.floor(Math.random() * words.length)];


let str = `У тебя ${randomBodyPart}, как ${randomAdjective} ${randomWord}`;

console.log(str );
