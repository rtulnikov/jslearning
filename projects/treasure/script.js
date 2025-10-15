/* 
спрятать клад
    создать рандомные координаты на карте
    создать элемет с картинкой и присвоить ей координаты
отслеживать клики
    найти координаты клика
    найти расстояние от клика до клада
    в зависимости расстояния пишем холодно или горячо
если
*/
const map = document.querySelector(".map");
const message = document.querySelector(".message");
const mapWidth = 400;
const mapHeight = 400;

const getRandomNumber = (num) => Math.floor(Math.random() * num);

const treusure = {
    x: getRandomNumber(mapWidth),
    y: getRandomNumber(mapHeight),
};

const getTreasure = () => {
    let img = document.createElement("img");
    img.src = "img/treasure.png";
    img.alt = "treusure";
    img.style.position = "absolute";
    img.style.top = treusure.y - 18 + "px";
    img.style.left = treusure.x - 15 + "px";
    map.append(img);
};
console.log(treusure);
    let click = 0;
map.addEventListener("click", (event) => {
    click++
    console.log(event.offsetX, event.offsetY);
    const diffX = event.offsetX - treusure.x;
    const diffY = event.offsetY - treusure.y;
    const distance = Math.floor(Math.sqrt(diffX * diffX + diffY * diffY));
    console.log(distance);

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
});
