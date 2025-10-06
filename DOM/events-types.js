/*
click — срабатывает при клике мышью на элемент.
mouseover — когда курсор мыши наведён на элемент.
mouseout — когда курсор мыши покидает элемент.
keydown — при нажатии клавиши на клавиатуре.
keyup — при отпускании клавиши на клавиатуре.
input — при изменении значения в поле ввода (input, textarea).
submit — при отправке формы.
load — когда страница или ресурс полностью загрузились.
scroll — при прокрутке страницы или элемента.
resize — при изменении размера окна браузера.
*/

//DOMContentLoaded - это событие который сробатывает когда прогружается весь html страничкаа и ему пофиг прогрузил он стили и картинки или нет.
document.addEventListener("DOMContentLoaded", () => {
    const p = document.querySelector("p");
    console.log(p);
    console.log("DOMContentLoaded сработал");

    p.addEventListener("mouseout", () => {
        console.log("mouseout сработал");
    });
    p.addEventListener("mouseover", () => {
        console.log("mouseover сработал");
    });
    p.addEventListener("mousedown", () => {
        console.log("mousedown сработал");
    });
    p.addEventListener("mouseup", () => {
        console.log("mouseup сработал");
    });
    p.addEventListener("click", () => {
        console.log("click сработал");
    });
});

//
window.addEventListener("load", () => {
    console.log("load сработал");
});
