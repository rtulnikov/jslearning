/* 
спрятать клад
    создать рандомные координаты на карте
    создать элемет с картинкой и присвоить ей координаты
отслеживать клики
    найти координаты клика
    найти расстояние от клика до клада
    в зависимости расстояния пишем холодно или горячо
если ...
*/

const maxWeight = 400;
const maxHeight = 400;
const map = document.querySelector(".picture")
const message = document.querySelector(".message")

const treusure = {
    x: Math.floor(Math.random() * maxWeight),
    y: Math.floor(Math.random() * maxHeight),
}

const getTreasure = () => {
    let img = document.createElement("img");
    img.src = "img/treasure.png";
    img.alt = "treusure";
    img.style.position = "absolute";
    img.style.top = treusure.y - 35 + "px";
    img.style.left = treusure.x - 38 + "px";
    map.append(img);
};

let click = 0;
map.addEventListener("click", (event) => {
    click++
    const difX = event.offsetX - treusure.x;
    const difY = event.offsetY - treusure.y;
    const distance = Math.floor(Math.sqrt(difX * difX + difY * difY))
    console.log(distance)

        switch (true) {
        case distance >= 200:
            message.innerText = "ультра  холодно";
            break
        case distance >= 100:
            message.innerText = "теплее";
            break
        case distance >= 50:
            message.innerText = "горячо";
            break
        case distance >= 10:
            message.innerText = "горим";
            break
        case distance >= 0:

            message.innerText = "клад найден! Вы справились за" + click + "попыток";
            getTreasure();
    }
})