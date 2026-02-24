let arra = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function deletale(number) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    return true;
}

for(let i = 0; i < arra.length;i++){
    console.log(deletale(arra[i]));
}
console.log(deletale(4))

function chet(number) {
    return number % 3 == 0 ? true : false;
}
