const modal = document.querySelector(".modal")
// const container = document.querySelector(".container")
const main = document.querySelector("main")
    
main.addEventListener("click", () => {

    // modal.classList.remove("inactive");
    // if(modal.classList.contains("inactive")){
    //     modal.classList.remove("inactive");
    // }else{
    //     modal.classList.add("inactive")
    // }
    modal.classList.toggle("inactive");
})