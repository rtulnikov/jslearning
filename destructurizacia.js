const bodyParts = ["глаз", "нос", "череп","жопа", "лапки"];
// const eye = bodyParts[0];
// const nose = bodyParts[1];
// const sculk = bodyParts[2];
// const ass = bodyParts[3];
// const paws = bodyParts[4]; 

// const [eye, nose, sculk, ass, paws] = bodyParts
// const [eye, nose, , ass, paws] = bodyParts
// const [eye, nose, ...array] = bodyParts
const [, , ...array ] = bodyParts;
// console.log(eye, nose);
console.log(array);