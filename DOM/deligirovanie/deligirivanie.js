'use strict'
let list = document.querySelector("#list")
const tanks = ["T-34", "Panzer IV", "Sherman", "IS-2", "M24 Chaffee"];

list.addEventListener("click", (e) =>{
    let li = e.target.closest("li")
    if(!li) return;
    let activeLi = list.querySelector(".red")
    if(activeLi) {
        activeLi.classList.remove("red")
    }
    li.classList.add("red")
})

for(let el of tanks){
    let li = document.createElement("li")

    
    li.textContent = el
    list.append(li)
}