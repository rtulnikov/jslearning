// копирование по значению

let a = 2;
let b = a;
 a = 3;

 console.log(a,b)

// копироваие по ссыылке
 let c = [2];
 let d = c;
 c[0] = 3;
 console.log(c,d)

 // как копировать мосссив
  let i = [2];
 let f = [...i];
 i[0] = 3;
console.log(i,f)