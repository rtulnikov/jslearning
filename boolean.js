let iLoveJs = true;
let isDestroyed = false;
let haveBullet = true;
let haveHP = false;

const canShoot = haveBullet && haveHP; 
const canPlay = (haveBullet || haveHP) && !isDestroyed;
// const canPlay = !isDestroyed;
let isRaining = true;


console.log(canPlay);
console.log(canShoot);

console.log('2' === 2)