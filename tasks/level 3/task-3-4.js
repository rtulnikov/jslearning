const func = (eter1, eter2) =>{
    if(eter1 === undefined) {
        eter1 = 4
    }
    if(eter2 === undefined) {
        eter2 = 4
    }

    for(let i = 1; i <= eter1; i++) {
        let ja = '';
        for(let g = 1; g <= eter2; g++) {
            ja += '*'
        }
    console.log(ja)
}
}
func(10, 50)