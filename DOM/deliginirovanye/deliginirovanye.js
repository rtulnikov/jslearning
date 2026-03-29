"use strict";
const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < 100; i++) {
    const elem = document.createElement("div");
    elem.innerHTML = `User с id ${i}`;
    elem.setAttribute("data-id", i);
    // elem.addEventListener("click", event =>{
    //     console.log(`Deleted user ${i}`)
    // })
    wrapper.append(elem);
}
    wrapper.addEventListener("click", (event) => {
        event.target.closest("div").remove()
    
});

