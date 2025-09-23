const paragraph = document.querySelector('p')
const paragraph2 = document.querySelector('.text')
const paragraph3 = document.querySelector('#parag')
const paragraph4 = document.getElementById('parag')

const getRandomColor = () =>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const rgb = red+green+blue
        return rgb.joing('')
}

getRandomColor()
// paragraph.addEventListener('click', () =>{
//     paragraph.style.backgroundColor = 'rgb(50,250,250)'
// })

console.log(paragraph4)