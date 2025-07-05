const func = (num1 = 4, num2 = 4) =>{

    for(let i = 1; i <= num1; i++) {
        let row = '';
        for(let j = 1; j <= num2; j++) {
            row += '*'
        }
    console.log(row)
}
}
func()