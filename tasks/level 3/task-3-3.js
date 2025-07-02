const bodyParts = ["глаз", "нос", "череп","жопа"];
const adjectives = ["вонючая", "унылая", "дурацкая", "тупая", "афигевшая"];
const words = ["муха", "выдра", "дубина", "мартышка", "крыса"];

const sayTeaser = (arrayInFunc) =>{
let randomElement = arrayInFunc[Math.floor(Math.random() * bodyParts.length)];
    return randomElement;
}


let vyvod = 'У тебя ' + sayTeaser(bodyParts)+ ', ' + ' как ' + sayTeaser(adjectives) + ' ' + sayTeaser(words);


console.log(vyvod)

