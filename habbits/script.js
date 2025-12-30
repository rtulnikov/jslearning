"use strict";

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";
let globalActiveHabbitId;

/* page */
const page = {
    menu: document.querySelector(".menu__list"),
    header: {
        h1: document.querySelector(".h1"),
        progressPercent: document.querySelector(".progress__percent"),
        progressCoverBar: document.querySelector(".progress__cover-bar"),
    },
    content: {
        daysContainer: document.getElementById("days"),
        nextDay: document.querySelector(".habbit__day"),
    },
    popup: {
        index: document.getElementById("add-habbit-popup"),
        cover: document.querySelector(".cover"),
    },
};

/* utils */
function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function togglePopup() {
    page.popup.index.classList.toggle("cover_hidden");
}
// page.popup.cover.addEventListener("click", function(e){
//     console.log(e.target);
//     if(e.target "div.popup") page.popup.index.classList.toggle("cover_hidden");
// });

function resetForm(form, fields){
      for(let field of fields){
       form[field].value = '';

    }
}

function validateAndGetFormData(form, fields){
    const formData = new FormData(form);
    const res={};
    for(let field of fields){
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');

        if(!fieldValue){
            form[field].classList.add('error');
        return;
    }
    res[field] = fieldValue;
    }
    let isValid = true;
    for(let field of fields){
        if(!res[field]){
            isValid = false;
        }
    }
    if(!isValid){
        return; 
    }
    console.log(res)
    return res;
}

function rerenderMenu(activeHabbit){
    for(const habbit of habbits){
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`)
        if(!existed){
            //создание
            const element = document.createElement("button");
            element.setAttribute("menu-habbit-id", habbit.id);
            element.classList.add("menu__item");
            element.addEventListener("click", () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}"></img>`;

            if (activeHabbit.id === habbit.id) {
                element.classList.add("menu__item-active");
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add("menu__item-active");
        } else {
            existed.classList.remove("menu__item-active");
        }
    }
}

function rerenderHead(activeHabbit) {
    page.header.h1.innerText = activeHabbit.name;
    const progress =
        activeHabbit.days.length / activeHabbit.target > 1
            ? 100
            : (activeHabbit.days.length / activeHabbit.target) * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + "%";
    page.header.progressCoverBar.setAttribute("style", `width: ${progress}%`);
}

function rerenderContent(activeHabbit) {
    page.content.daysContainer.innerHTML = "";
    for (const index in activeHabbit.days) {
        const element = document.createElement("div");
        element.classList.add("habbit");
        element.innerHTML = `<div class="habbit__day">День ${
            Number(index) + 1
        }</div>
                            <div class="habbit__comment">${
                                activeHabbit.days[index].comment
                            }</div>
                            <button class="habbit__delete" onclick="deleteDay(${index})">
                                <img src="images/delete.svg" alt="удалить день ${
                                    index + 1
                                } ">
                            </button>`;
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
}

function rerender(activeHabbitId) {
    const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
    globalActiveHabbitId = activeHabbitId;
    console.log(globalActiveHabbitId);
    if (!activeHabbit) {
        return;
    }
    document.location.replace(document.location.pathname + '#' + activeHabbitId)
    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderContent(activeHabbit);
}


function addDays(event) {
    const form = event.target;
    event.preventDefault();
    const data = new FormData(form);
    const comment = data.get("comment");
    form["comment"].classList.remove("error");
    if (!comment) {
        form["comment"].classList.add("error");

        return;
    }
    habbits = habbits.map((habbit) => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,

                days: habbit.days.concat([{comment: data.comment}])
            }
        }
        return habbit;
    })
    resetForm(event.target, ['comment']);

    form["comment"].value = "";
    rerender(globalActiveHabbitId);
    saveData();
}

function deleteDay(index) {
    habbits = habbits.map((habbit) => {
        if (habbit.id === globalActiveHabbitId) {
            habbit.days.splice(index, 1);
            return {
                ...habbit,
                days: habbit.days,
            };
        }
        return habbit;
    });
    rerender(globalActiveHabbitId);
    saveData();
}


function setIcon(context, icon){
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector(".icon.icon_active");
    activeIcon.classList.remove("icon_active");
    context.classList.add("icon_active");
};

function addHabbit(event){
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['name', 'icon', 'target']);
    console.log("g")
    if(!data){
        return;
    }

    const maxId = habbits.reduce((acc, habbit)=> acc > habbit.id ? acc : habbit.id, 0);

    habbits.push({
        id: maxId + 1,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: [],
    });
    
    resetForm(event.target, ['name', 'target']);
    togglePopup();
    saveData();
    rerender(maxId + 1)
    
}

( () =>{
    loadData()
    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabbit = habbits.find((habbit) => habbit.id == hashId);
    if(urlHabbit){
       rerender(urlHabbit.id);
    }else{
        rerender(habbits[0].id);
    }
   
})();