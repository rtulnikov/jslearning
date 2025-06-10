const bodyParts = [ "глаз", "череп", "нос",  "жопа",  "лапки"];
const numbers = [4, 3, 2, 1];

const element = 'лапки'
const sculkIndex = bodyParts.indexOf(element);
if (sculkIndex === -1) {
    console.log('элемент не найден')
} else {
    const result = bodyParts.slice( sculkIndex , sculkIndex + 2 )
    console.log(result);
}
// const result = bodyParts.slice(sculkIndex, sculkIndex + 2);

console.log(bodyParts.indexOf('череп'));
console.log(bodyParts['череп']);

console.log(sculkIndex);


