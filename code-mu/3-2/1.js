//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

for(let i = 10; i < 1001; i++){
    let predLastNumber = String(i).at(-2)
    if(predLastNumber % 2 == 0){
        console.log(i)
    }
}
