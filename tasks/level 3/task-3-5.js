const sumInRange = (minimumNumb, maximumNumb) =>{
 let sum = 0;
  for (let i = minimumNumb; i <= maximumNumb; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumInRange(5, 20));