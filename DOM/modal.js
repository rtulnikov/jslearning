const modal = document.querySelector(".modal");
// const container = document.querySelector(".container")
const main = document.querySelector("main");
const list = document.getElementById("list");

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

let i = 0;
let show = true;
document.addEventListener("click", () => {

    const createLi = (index) => {
        const li = document.createElement("li");
        li.innerText = tank[index];
        list.append(li);
    }

    if (show) {
        if (i < tank.length) {
            createLi(i);
            i++;
        } else {
            show = false;
            i = tank.length - 1;
            list.children[i].remove();
            i--;
        }
    } else {
        if (i >= 0) {
            list.children[i].remove();
            i--;
        } else {
            show = true;
            i = 0;
            createLi(i);
            i++;
        }
    }
});

// tank.forEach( (elem) => {
//     const li = document.createElement("li")
//     li.innerText = elem;
//     list.append(li)

// })