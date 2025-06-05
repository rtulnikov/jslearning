const bodyParts = ["глаз", "нос", "череп","жопа", "лапки"];

//меняем значения переменых через дополнительную переменную
// let tmp = bodyParts[0];
// bodyParts[0] = bodyParts[4];
// bodyParts[4] = tmp;

//меняем значения переменных через 2 дополнительные переменные
// let tmp1 = bodyParts[0];
// let tmp2 = bodyParts[4];
// bodyParts[0] = tmp2;
// bodyParts[4] = tmp1;

//через деструктуризацию
[bodyParts[0], bodyParts[4]] = [bodyParts[4], bodyParts[0]]

console.log(bodyParts);