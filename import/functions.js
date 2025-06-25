// export const sayHello = () =>{
//    console.log('В Москве стартовал городской проект «Лето в Москве», который охватит более 400 локаций по всему городу. С июня по август москвичей и туристов ждут фестивали, концерты, кинопоказы, театральные представления, спортивные активности, мастер-классы и другие события, куда можно заглянуть всей семьей.'); 
// }

// // sayHello();



// export const randomAnimal = () =>{
//     const animals = ['Тигр','Олень', 'Зубр', 'Хорек'];
//     let index = Math.floor(Math.random() *animals.length);
//     console.log(animals[index]
// );
// }

// // randomAnimal();
// export const internalLoop = () =>{
//     for(let n = 1; n <= 4; n++) {
//     console.log('Внешний цикл, итерация ' + n);
//     for(let b = 1; b <= 3; b++) {
//       console.log('\t Внутренний цикл, итерация ' + b)
//       for(let v = 1; v <= 2; v++) {
//         console.log('\t\t Второй Внутренний цикл, итерация ' + v)
//       }
//     }
// }

// }

// 1
// 12
// 123
// 1234
// 12345

const climb = () =>{
    let row = '';
    for(let i = 1; i <= 5; i++) {
        row += i
        console.log(row)
    }
}

// climb();

// 1
// 22
// 333
// 4444
// 55555
export const fignyi = () =>{
    
    for(let i = 1; i <=5; i++) {
        let laddtr = '';
        for(let j = 1; j <= i; j++) {
            laddtr += i
            
        }
    console.log(laddtr)
    }
}

// fignyi();