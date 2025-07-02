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
const fignyi = () =>{
    
    for(let i = 1; i <=5; i++) {
        let laddtr = '';
        for(let j = 1; j < i+1; j++) {
            laddtr += i
            
        }
    console.log(laddtr)
    }
}

// fignyi();


const getRandomNumber = () =>{
    let random = Math.ceil(Math.random() *10);
    return random;
}

let rand = getRandomNumber()

//["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
//isMorning()
//<button style="background-color: blue; color: white;">Нажми меня!</button>

const getDays = () =>{
    return ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

}
console.log(getDays())

const getButton = () =>{
    return '<button style="background-color: blue; color: white;">Нажми меня!</button>'
}

console.log(getButton());



const isMorning = () =>{
    let date = new Date().getHours()
    return date < 10 ?  true : false;
     
}

console.log(isMorning())



const sum = (a, b, c) =>{
    return a + b + c
}
console.log(sum(25, 52, 64))
2.2,3
console.log(sum(82469, 155512))

const maltyplay = (a, b) =>{
    return a * b
} 

const stepen = (a, b) =>{
    return a**b;
}
console.log(2**3 + 'арывравв');

console.log(stepen(2,8))

const animals = ['Тигр','Олень', 'Зубр', 'Хорек'];
const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

const getArrayElement = (r) =>{
    const index = Math.floor(Math.random() * r.length)
    const element = r[index]
    return element;

}

console.log(getArrayElement(days))

