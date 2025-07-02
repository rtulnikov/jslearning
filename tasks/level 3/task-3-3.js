const bodyParts = ["глаз", "нос", "череп","жопа"];
const adjectives = ["вонючая", "унылая", "дурацкая"];
const words = ["муха", "выдра", "дубина", "мартышка", "крыса"];

const sayTeaser = () =>{
let randomElement = Math.floor(Math.random() * bodyParts.length);
let element = a[randomElement]
    return element;
}


let vyvod = 'У тебя ' + sayTeaser(bodyParts)+ ', ' + ' как ' + sayTeaser(adjectives) + ' ' + sayTeaser(words);


console.log(vyvod)

