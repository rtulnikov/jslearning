'use strict'
const container = document.querySelector(".container")

//добавляем в localStorage
localStorage.setItem('name', 'djd')
//получаем из localStorage
const userName = localStorage.getItem('name')
const user= {
    name: 'Дима',
    age: 13,
    skills: ['игры', 'бег', 'тупизм']
}
container.append(userName)

//преобразовываеем объект в JSON
const j = JSON.stringify(user)
localStorage.setItem('user', j)
const userjSon = localStorage.getItem('user') 

//преобразовываеем JSON в объект
const userSkills = JSON.parse(userjSon).skills
console.log(userSkills)
userSkills.forEach(elem => {
    const div = document.createElement("div")
    div.append(elem)
    container.appendChild(div)
});

localStorage.removeItem('name')
localStorage.clear()