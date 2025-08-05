const numbers = [1, 45055550, -2];

const min = (arr) => {
    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minNumber > arr[i]) minNumber = arr[i];
    }

    return minNumber;
};

console.log(min(numbers));
