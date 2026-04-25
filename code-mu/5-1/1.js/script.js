//Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.


let div = document.querySelector(".div")


let btn = document.querySelector(".btn")


function sum(){
    let num1 = document.querySelector(".inp1").value
    let num2 = document.querySelector(".inp2").value
      let count = +num1 + +num2;

      div.textContent = `Сумма ${count}`;
}



