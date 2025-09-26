const input = document.querySelector("input");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");

button.addEventListener("click",() => {
    //создаем элемент картинку
    const img = document.createElement("img")
    img.src = "https://mos-holidays.ru/wp-content/uploads/2025/09/ot-nejrotestirovaniya-do-praktikumov-chto-zhdet-go-4.jpg"
    img.alt = "aiaiaa"
    img.style.maxWidth = "200px"
    result.append(img)
    img.addEventListener("click", () => {
        img.remove()
    })
})