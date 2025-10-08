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

const mapWidth = 400;
const mapHeight = 400;

const getRandomNumber = (num) => Math.floor(Math.random() * (num + 1));

const treusure = {
    x: getRandomNumber(mapWidth),
    y: getRandomNumber(mapHeight),
};
const picture = document.querySelector(".map");
const getTreasure = () => {
    let img = document.createElement("img");
    img.src = "img/treasure.png";
    img.alt = "treusure";
    img.style.position = "absolute";
    img.style.top = treusure.y - 18 + "px";
    img.style.left = treusure.x - 15 + "px";

    picture.append(img);
};
getTreasure();
console.log(treusure);

picture.addEventListener("click", (event) => {
    console.log(event.offsetX, event.offsetY)
    const diffX = event.offsetX - treusure.x
    const diffY = event.offsetY - treusure.y
    const distance = Math.floor(Math.sqrt(diffX*diffX + diffY*diffY))
    console.log(distance)
});
