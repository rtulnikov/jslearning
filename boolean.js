let bullets = 0;
let hitPoints = 2750;


const haveHP = hitPoints > 0;
const haveBullets = bullets > 0;
const isDestroyed = !haveHP;
const canShoot = haveBullets && haveHP;

const canPlay = (haveBullets || haveHP) && !isDestroyed;
// const canPlay = !isDestroyed;
let isRaining = true;


console.log(isDestroyed);
console.log(canShoot);

let age = 7;
let needAge = 8;
const climb = needAge <= age;

console.log(climb);