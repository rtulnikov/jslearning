const numbers = [-225555, 45055550, 12];

const min = (arr) => {
    let minNumber = arr[0]; 
        for(let i = 1; i < arr.length;  i++) { 
            if(minNumber > arr[i]) minNumber = arr[i];   
        }

    return minNumber;
}

console.log(min(numbers))