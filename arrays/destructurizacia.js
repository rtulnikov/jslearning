const bodyParts = ["глаз", "нос", "череп","жопа", "лапки"];
// const eye = bodyParts[0];
// const nose = bodyParts[1];
// const sculk = bodyParts[2];
// const ass = bodyParts[3];
// const paws = bodyParts[4]; 
//создаем переменные через деструктуризация
const [eye2, nose2, sculk2, ass2, paws2] = bodyParts;
const [eye3, nose3] = bodyParts;

console.log(eye, nose);
// let array3 = [...bodyParts]
const [eye4, nose4, , ass4, paws4] = bodyParts
const [eye5, nose5, ...array5] = bodyParts
const [, , ...array ] = bodyParts;
console.log(eye, nose);
console.log(array);

const destr = () => {
    return bodyParts;
}


destr()
destr()
const [eye6, , sculk6, ...massiv] = destr();
console.log(eye,  sculk )
console.log(massiv)
const sum = (...numbers) =>{
    let pustota = 0;
    for(let i = 0; i < numbers.length; i++) {
    pustota += numbers[i]
    };

    return pustota
}

console.log(sum(2842512, 25264282, 2568, 242521, 156353165))
// console.log(array);
const getNames = () =>{
    return  ['Ратмир', 'Дима'];
};

const [ratmir, dima] = getNames();
console.log(ratmir, dima);

const sum2 = (...numbers) =>{
    console.log(numbers); 
}
console.log(sum2(52, 28, 458, 83, 54))

