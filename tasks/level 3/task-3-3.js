const getRandomeElement = (array) => array[Math.floor(Math.random() * array.length)];

const sayTeaser = () =>{
    const bodyParts = ["глаз", "нос", "череп","жопа"];
    const adjectives = ["вонючая", "унылая", "дурацкая", "тупая", "афигевшая"];
    const words = ["муха", "выдра", "дубина", "мартышка", "крыса"];

    return `У тебя  ${getRandomeElement(bodyParts)}, как ${getRandomeElement(adjectives)} ${getRandomeElement(words)}`;

}



console.log(sayTeaser())

