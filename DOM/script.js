const paragraph = document.querySelector('p');
const paragraph2 = document.querySelector(".text");
const paragraph3 = document.querySelector("#parag");
const paragraph4 = document.getElementById("parag");

const getRandomColor = () => {
    const getRandomRGB = () => Math.floor(Math.random() * 256);
    // const red = Math.floor(Math.random() * 256);
    // const green = Math.floor(Math.random() * 256);
    // const blue = Math.floor(Math.random() * 256);
    return "rgb(" + getRandomRGB() + "," + getRandomRGB() + "," + getRandomRGB() + ")";
};

paragraph.addEventListener("click", () => {
    paragraph.style.backgroundColor = getRandomColor();
});
//не перезаписывает действие
paragraph.addEventListener("click", () => {
    paragraph.classList.add('class');
});

//альтернативный вариант
paragraph.onclick = function(){
     paragraph.style.backgroundColor = getRandomColor();
     //придется добавлять свои функции сюда
    //  addClassList();
}
//перезапишет действие
paragraph.onclick = function(){
     paragraph.classList.add('class');
}
function addClassList(){
    //...
}