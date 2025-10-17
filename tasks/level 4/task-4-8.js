const words = ["apple", "banana", "cherry"];
const getCapitalWords = (words) => {
    return words.map( (elem) => elem.toUpperCase())
}
console.log(getCapitalWords(words))