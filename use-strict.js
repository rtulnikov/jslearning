'use strict'

//запрещаем создание переменных без var, let, const

if(2<0){
    let a = 0;
   //функция видна только в своей области видимости
    function func(){
        console.log("Привет, Ратмир!")
    }

}

console.log(a)