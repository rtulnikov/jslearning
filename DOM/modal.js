const modal = document.querySelector(".modal");
// const container = document.querySelector(".container")
const main = document.querySelector("main");
const list = document.getElementById("list")

main.addEventListener("click", (event) => {
    console.log(event.offsetX, event.offsetY);
    if (modal.classList.contains("inactive")) {
        modal.classList.remove("inactive");
    }
    //выводим модальное окно
    // modal.classList.remove("inactive");
    // if(modal.classList.contains("inactive")){
    //     modal.classList.remove("inactive");
    // }else{
    //     modal.classList.add("inactive")
    // }
    // modal.classList.toggle("inactive");

    let yPosition = event.offsetY;
    let xPosition = event.offsetX;
    modal.style.top = yPosition + "px";
    modal.style.left = xPosition + "px";

    document.addEventListener("keydown", (event) => {
        console.log(event.code);
        if (event.code === "ArrowUp") {
            modal.style.top = yPosition-- + "px";
        }
        if (event.code === "ArrowDown") {
            modal.style.top = yPosition++ + "px";
        }
        if (event.code === "ArrowLeft") {
            modal.style.left = xPosition-- + "px";
        }
        if (event.code === "ArrowRight") {
            modal.style.left = xPosition++ + "px";
        }
    });
});

const tank = [
    "танк",
    "броня",
    "снаряд",
    "пушка",
    "гусеница",
    "башня",
    "прицел",
    "карта",
    "командир",
    "дворик",
];

// tank.forEach( (elem) => {
//     const li = document.createElement("li")
//     li.innerText = elem;
//     list.append(li)

// })

    
 let i = 0;
document.addEventListener("click", () => {

    if(i < tank.length){
        const li = document.createElement("li")
        li.innerText = tank[i]
        i++
        list.append(li)
    }

 
})