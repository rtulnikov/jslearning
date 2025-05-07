let bullets = 0;
let hitPoints = 2750;


let iLoveJs = true;
let haveHP = hitPoints > 0;
let haveBullets = bullets > 0;
let isDestroyed = !haveHP;
const canShoot = haveBullets && haveHP;

const canPlay = (haveBullets || haveHP) && !isDestroyed;
// const canPlay = !isDestroyed;
let isRaining = true;


console.log(isDestroyed);
console.log(canShoot);

let age = 10;
let needAge = 8;
const climb = needAge < age;
console.log(climb);
