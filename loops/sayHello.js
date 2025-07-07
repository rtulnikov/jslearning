/* 

**    **
**    **
********
********
**    **
**    **

*/

function firstRow(){
    let row = '';
    for(let i = 1; i <= 8; i++) {
        
        i >= 3 &&  i < 7 ? row += ' ' : row += '*';
        
    }
   console.log(row);
}

function secondRow() {
    let row = '';
    for(let i = 1; i <= 8; i++) {
        row += '*'
    }
    console.log(row)
}

function sayHello () {
    let row = '';

    for(let i = 1; i <= 6; i++) {
        
        
        for(let j = 1; j <= 8; j++) {
           i >= 3 && i < 5 ? row += ' ' : row += '*'; 
        }
    } 
    console.log(row)
}

sayHello()