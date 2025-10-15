const paragrath = document.querySelector("p")
const btn = document.querySelector("button")
const input = document.querySelector("input");
const guess = Math.floor(Math.random() * 10)
console.log(guess)

btn.addEventListener("click", () => {
      if(parseInt(input.value) > 10 || parseInt(input.value) < 1){
                paragrath.innerText = "можно только от 1 до 10"
                return
            }
    if(input.value < guess){
        paragrath.innerText = "больше"
    }else if(input.value > guess){
        paragrath.innerText = "меньше"
    }else if(input.value == guess){
        paragrath.innerText = "урааа, ты наконецто угадал"
    }
})
input.addEventListener("keydown", (event) => {
        if (event.code === "Enter"){
            if(parseInt(input.value) > 10 || parseInt(input.value) < 1){
                paragrath.innerText = "можно только от 1 до 10"
                return
            }
            if(input.value < guess){
        paragrath.innerText = "больше"
    }else if(input.value > guess){
        paragrath.innerText = "меньше"
    }else if(input.value == guess){
        paragrath.innerText = "урааа, ты наконецто угадал"
    }
    console.log("Enter")
    }
})