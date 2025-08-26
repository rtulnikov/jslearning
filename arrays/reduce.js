let numbers = [45, 2, 65, 58, 10];
let sum = 0;
for (let elem of numbers) {
    sum += elem;
}

console.log(numbers.reduce( (acc, elem, index, aarray) =>{
    console.log(acc, elem, index, aarray)
    return acc + elem},
    0 ));
let avg = numbers.reduce( (acc, elem, index) => {
    console.log(acc, elem, index)
    if(index == 4){
      return  (acc + elem) / numbers.length
    }
    else{
       return acc + elem ; 
    }
    
} )
console.log(avg)