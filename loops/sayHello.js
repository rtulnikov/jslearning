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

// function sayHello () {
    
//     for(let i = 1; i <= 6; i++) {
//       let row = '';
//         for(let j = 1; j <= 8; j++) {
//             if(i < 3 || i > 4) {
//                 j >= 3 && j < 7 ? row += ' ' : row += '*'; 
//             } else {
//                 row += '*';
//             }
//         }
//         console.log(row);
//     }
    
// }

// sayHello()
function sayHello() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 1; i <= 6; i++) {
        let row = '';
        for (let j = 1; j <= 8; j++) {
            if (i < 3 || i > 4) {
                row += j >= 3 && j < 7 ? ' ' : '*';
            } else {
                row += '*';
            }
        }

        // Запускаем асинхронную функцию для вывода с задержкой
        delay((i - 1) * 2000).then(() => {
            console.log(row);
        });
    }
}

// sayHello();
async function sayHello() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 1; i <= 6; i++) {
        let row = '';
        for (let j = 1; j <= 8; j++) {
            if (i < 3 || i > 4) {
                row += j >= 3 && j < 7 ? ' ' : '*';
            } else {
                row += '*';
            }
            process.stdout.write(row.at(-1)); // Выводим последний символ
            await delay(1000); // Задержка 1 секунда
        }
        console.log(); // Переход на новую строку
    }
}

sayHello();