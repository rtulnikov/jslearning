const data1 =  ' ' && {} && null && undefined;
const data2 =  NaN && undefined && 'привет';
const data3 =  false && '' && null;
const data4 =  true && null && [];
const data5 =  [] && {} && '';
const data6 =  null && undefined;
const data7 =  5 && 6 && 0;
const data8 =  -10 && true && '';

console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)
console.log(data5)
console.log(data6)
console.log(data7) //мне кажется все выведется потому что это же и получается он должет выводить и то и другое
console.log(data8)

//вывод1: все на много сложнее
//вывод2: и он как или только он выводит только то что когда он пытается приобразовать к boolean возвращет false