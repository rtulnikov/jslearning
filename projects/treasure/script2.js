/* 
спрятать клад
    создать рандомные координаты на карте
    создать элемет с картинкой и присвоить ей координаты
отслеживать клики
    найти координаты клика
    найти расстояние от клика до клада
    в зависимости расстояния пишем холодно или горячо
если ...

При клике на карту создавать точки в месте клика:
    создаем элемент - div
    добавляем ему класс - dot
    присваиваем координаты клика (из offset), уменьшенные на 2 пикс (чтобы центр был в месте клика)
    аппендим на карту
После нахождения клада удаляем возможность создавать точки на карте
*/

const maxWeight = 400;
const maxHeight = 400;
const map = document.querySelector(".picture");


const message = document.querySelector(".message");

const treusure = {
    x: Math.floor(Math.random() * maxWeight),
    y: Math.floor(Math.random() * maxHeight),
};

function createDot(event) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = event.offsetY - 2 + "px";
    dot.style.left = event.offsetX - 2 + "px";
    map.appendChild(dot);

    //удаляем черех 10 секкунд 
    setTimeout( () => {
        dot.remove()
    }, 10000 )

    const wave = document.createElement("div");
    wave.classList.add("ripple");
    wave.style.top = event.offsetY - 5 + "px";
    wave.style.left = event.offsetX - 5 + "px";
    map.append(wave);

    //удалям по окончании анимации
    wave.addEventListener("animationend", () => {
        wave.remove()
    })
}

const getTreasure = () => {
    let img = document.createElement("img");
    img.src = "img/treasure.png";
    img.alt = "treusure";
    img.style.position = "absolute";
    img.style.top = treusure.y - 18 + "px";
    img.style.left = treusure.x - 15 + "px";
    map.append(img);
};

function handleClick(event) {
    click++;
    const difX = event.offsetX - treusure.x;
    const difY = event.offsetY - treusure.y;
    const distance = Math.floor(Math.sqrt(difX * difX + difY * difY));
    
    let clue = "";
    if (distance >= 200) {
        clue = "ультра  холодно";
    } else if (distance >= 100) {
        clue = "теплее";
    } else if (distance >= 30) {
        clue = "горячо";
    } else if (distance >= 10) {
        clue = "горим";
    } else {
        clue = "клад найден! Вы справились за " + click + " попыток";
        getTreasure();
        map.removeEventListener("click", handleClick);
    }

    message.innerText = clue;
    return true;
}

let click = 0;
map.addEventListener("click", handleClick);
map.addEventListener("mousedown", createDot);
