let catik = 'Котик';
console.log(catik.split('').reverse().join(''));

console.log(catik[4] + catik[3] + catik[2] + catik[1] + catik[0]);

let sobachka = '';
for(let i = catik.length - 1; i >= 0; i= i -1) {
    sobachka += catik[i]
}
console.log(sobachka)

// ****
// ****
// ****
