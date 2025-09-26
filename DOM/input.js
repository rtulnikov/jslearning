const input = document.querySelector("input");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");

//выводиим текст из input
// button.addEventListener("click", () => {
//     result.innerText = input.value
//     input.value = ''
// })
//выводиим текст из input с добавлением  к уже добавленному
button.addEventListener("click", () => {
    result.append(input.value)
    input.value = ''
})