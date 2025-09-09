// const ratmir = {
//     name:'Ратмир',
//     age: 11,
//     address: ['Москва', 'Каспийская', 28, 4, 31],
//     "номер комнаты": 2,
// }
// const vasyi = {
//     name:'Вася',
//     age: 54,
//     address: ['Кисловодск', 'Каринарная', 5, 7, 11],
//     "номер комнаты": 3,
// }
// const petyi = {
//     name:'петя',
//     age: 5,
//     address: ['Симферопль', 'Кортенская', 12, 7, 57],
//     "номер комнаты": 6,
// }
// const dima = {
//     name:'Дима',
//     age: 42,
//     address: ['Краснодар', 'Ахтинская', 46, 7, 81],
//     "номер комнаты": 7,
// }
// const vanyi = {
//     name:'Ваня',
//     age: 16,
//     address: ['Воронеж', 'Ивановский проспект', 4, 6, 38],
//     "номер комнаты": 4,
// }

// const array = [ratmir, vanyi, vasyi, dima, petyi]
// console.log(array)

const array = [
    {
        name: "Ратмир",
        age: 11,
        address: ["Москва", "Каспийская", 28, 4, 31],
        "номер комнаты": 2,
    },
    {
        name: "Ваня",
        age: 16,
        address: ["Воронеж", "Ивановский проспект", 4, 6, 38],
        "номер комнаты": 4,
    },
    {
        name: "Вася",
        age: 54,
        address: ["Кисловодск", "Каринарная", 5, 7, 11],
        "номер комнаты": 3,
    },
    {
        name: "Дима",
        age: 42,
        address: ["Краснодар", "Ахтинская", 46, 7, 81],
        "номер комнаты": 7,
    },
    {
        name: "петя",
        age: 5,
        address: ["Симферопль", "Кортенская", 12, 7, 57],
        "номер комнаты": 6,
    },
];

array.push({
    name: "какашка",
    age: 5,
    address: ["Яркутск", "Паловниковый проспект", 23, 4, 58],
    "номер комнаты": 4,
});

// console.log(array[3]["номер комнаты"]);
// console.log(array[4].address[0]);
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     for (let [key, value] of Object.entries(array[i])) {
//         console.log(`${key}: ${value} `);
//     }
//     console.log("\n");
// }

//проходим по всем обьектам массива  и выводим их в виде массива
// // array.forEach( (elem) => {
//     // let [key,value] = Object.entries(elem)
//     // console.log(`${key}: ${value}`)
//     console.log(Object.entries(elem))
// })

// let arr = [
//   [ 'name', 'какашка' ],
//   [ 'age', 5 ],
//   [ 'address', [ 'Яркутск', 'Паловниковый проспект', 23, 4, 58 ] ],
//   [ 'номер комнаты', 4 ]
// ]
let arr = Object.entries(array[0]);

// console.log(arr[0][0],arr[0][1])
// console.log(arr[1][0],arr[1][1])
// console.log(arr[2][0],arr[2][1])
// console.log(arr[3][0],arr[3][1])

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i][0],arr[i][1])
// }

//проходим по массиву и выводим его значения
// arr.forEach( ([key,value]) => {
//     console.log(key,value)
// })

// console.log(Object.entries(array[0]))

array.forEach((elem) => {
    // let [key,value] = Object.entries(elem)
    // console.log(`${key}: ${value}`)
    // console.log(Object.entries(elem))
    Object.entries(elem).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log();
});
