'use strict'

const button = document.querySelector(".button")
const inner = document.querySelector(".inner")
const wrapper = document.querySelector(".wrapper")

    button.addEventListener("click", function(event){
        this.style.backgroundColor = 'purple';
    })
    inner.addEventListener("click", function(event){
        this.style.backgroundColor = 'blue';
        event.stopPropagation();
    })
    wrapper.addEventListener("click", function(event){
        this.style.backgroundColor = 'red';
    }, true)