const bodyParts = ["глаз", "нос", "череп","жопа", "лапки"];
// const eye = bodyParts[0];
// const nose = bodyParts[1];
// const sculk = bodyParts[2];
// const ass = bodyParts[3];
// const paws = bodyParts[4]; 

// const [eye, nose, sculk, ass, paws] = bodyParts;
// const [eye, nose] = bodyParts;
// console.log(eye, nose);

// const [eye, nose, , ass, paws] = bodyParts
// const [eye, nose, ...array] = bodyParts
const [, , ...array ] = bodyParts;
// console.log(eye, nose);
console.log(array);

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

const sum = (...numbers) =>{
    console.log(numbers); 
}
console.log(sum(52, 28, 458, 83, 54))