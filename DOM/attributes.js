const paragraphs = document.querySelectorAll("p");
paragraphs.forEach( (p, i) => {
    p.setAttribute("class-id", i)
})
paragraphs.forEach( (p, i) => {
    p.dataset.userId = i;
})
const par3 = document.querySelector('[class-id="3"]');
par3.style.backgroundColor = "red";

const par2 = document.querySelector('[class-id="2"]');
console.log(par2.dataset.userId)