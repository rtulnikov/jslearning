let zagWord = document.querySelector(".zagad__word")
const pole = document.querySelector(".ugad")
const input = document.querySelector(".guess__input")
const button = document.querySelector(".otp")
const all = document.querySelector(".all")

const guessWords = ['король','рыцарь','скуф','лошадь'];
const guessWord = guessWords[Math.floor(Math.random() * guessWords.length)]
let guessWordLength = guessWord.length

zagWord.textContent = '-'.repeat(guessWord.length);

let divText = zagWord.textContent;
let divArr = divText.split('') 

pole.innerHTML = `Введите букву`

function enterRigth() {//ИИ
switch(guessWordLength > 0){
    
    case input.value == '' :
        input.classList.add("error")
        return;
    case  input.value.length > 1:
        pole.innerHTML = `можно только одну букву`
        return;
    case !guessWord.includes(input.value) :
        pole.innerHTML = `вы не угадали букву`;
        input.value = ''
        return;

    case guessWord.includes(input.value) :
        pole.innerHTML = `вы угадали букву`;
        for (let i = 0; i < guessWord.length; i++) {
            if (guessWord[i] == input.value) {
                divArr[i] = input.value
                zagWord.textContent = divArr.join('')
                guessWordLength--
                 
                if(guessWordLength == 0) pole.innerHTML = `было загадано слово ${ divArr.join('')}`
               
            }
        }
    case input.value == '':
        input.value = ''

}

}

button.addEventListener("click", enterRigth)
input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        enterRigth();
    }
});
