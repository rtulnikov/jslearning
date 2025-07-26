// const array = [80, 2, 52];
const array2 = [20, 20, 73];

const max = (arr) => {
    //создаем переменную для хранения max числа
    //присваеваем в неё первый элеменрт массива

    let maxNumber = arr[0]; 
    //проходим в цикле по всем элементам
        for(let i = 1; i < arr.length;  i++) {
            //если следующе число больше найденного максимального, то перезаписываем его этим числом 
            if(arr[i] > maxNumber) maxNumber = arr[i];   
        }

    return maxNumber;
}

console.log(max(array2))