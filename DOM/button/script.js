'use strict'
//1.вывести в консоль все названия иконок (sport, food, water)
/*2. создать в index.html какой-то селектор, получить его в js, и в него добавить кнопки (<button>), в которых будут иконки 
из массива habbits -> icon
*/

const habbits = [
    {"id":1,"icon":"sport","name":"Отжимания","target":10,"days":[{"comment":"dsffff"}]},
    {"id":2,"icon":"food","name":"Правильное питание","target":10,"days":[{"comment":"Круто"}]},
    {"id":3,"name":"jj","target":"24","icon":"sport","days":[]},
    {"id":4,"name":"ваоаоы","target":"5","icon":"sport","days":[]},
    {"id":5,"name":"питье","target":"10","icon":"water","days":[]},
]
//1
function returnIcon(){
    for(let i = 0; i < habbits.length; i++){
        if(i < habbits.length){
        console.log(habbits[i].icon)
        }
        
    }
    
}
returnIcon()

//2

let icons = document.querySelector('.icon')
// function getIcon(){
//     for(let i = 0; i < habbits.length; i++){
//         let button = document.createElement('button');
//         let img = document.createElement('img');
//         img.src = `images/${habbits[i].icon}.svg`;
//         button.append(img)
//         div.appendChild(button)
//     }
// }
// getIcon()

// function getIcon(){
//     for(let elem of habbits){
//         let button = document.createElement('button');
//         let img = document.createElement('img');
//         img.src = `images/${elem.icon}.svg`;
//         button.append(img)
//         div.appendChild(button)
//     }
// }
// getIcon()


// // function getIcon(){
// //     habbits.forEach((obj) =>{
// //         let button = document.createElement('button');
// //         let img = document.createElement('img');
// //         img.src = `images/${obj.icon}.svg`;
// //         button.append(img)
// //         div.appendChild(button)
// //     })
        
// //     }
    

// // getIcon()
localStorage.setItem('habbits', JSON.stringify(habbits));
let habbitsStringy = localStorage.getItem('habbits');

let habbitArray = JSON.parse(habbitsStringy);

function renderMenu(id){
    icons.innerHTML= ''
    habbitArray.forEach(element => {
        let button = document.createElement("button");
        // button.dataset.btnId = element.id;
        if(id === element.id){
            button.classList.add("menu__item-active")
        }
        button.addEventListener("click", (event) =>{
            event.preventDefault()
            if(id !== element.id) renderMenu(element.id)
        });
        button.classList.add("menu__item")
        button.innerHTML = `<img src=./images/${element.icon}.svg />`
        icons.append(button)

    });
};
renderMenu(habbitArray[0].id)
console.log(habbitArray[0].id)

