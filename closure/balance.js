//

function calNumb(numb) {
    let x = 5
    x = x + 100
    x = x / 5
    return x
}
let res = calNumb(5)
console.log(res)
function s(rad) {
    return 3.14 * rad ** 2
}
let result = s(5)
console.log(result)

// function calcHtml(tag = 'button',text,id) {
//     let el = document.createElement(tag)
//     el.id = id
//     el.innerText = text
//     return el
// }
// let newAl = calcHtml('div', 'dsfs')
// console.log(newAl)

logArs(1,9,8,853)

function logArs() {
    if (!arguments.length) {
        return
    }
    for (let argument of arguments) {
        console.log(argument)
    }
    console.log('больше ничего нет')
}

const sayHello = () => 5
let value = sayHello()
console.log(value)


let bronLinks = ['vk', 'youtube', 'instagramm']
let arr = []
const links = () => {
    for (let link of bronLinks) {
        let repairlink = `https//${link}.com`
        arr.push(repairlink)
    }
}
links()
console.log(arr)