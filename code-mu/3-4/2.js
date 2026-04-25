//Поменяйте местами пары элементов этого массива:
let arr = [1, 2, 3, 4, 5, 6,7]

    for(let i  = 0; i < arr.length ; i+=2){ 
        if(arr[i+1] != undefined){
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
    console.log(arr)