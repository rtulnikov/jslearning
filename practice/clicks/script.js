"use strict";
import yellowButton from "./components/yellowButton.js";

{yellowButton}

const btn = document.querySelector("button");
const clicksNumber = document.querySelector("button span");

let count = 0;
btn.addEventListener("click", () => {
    count++;
    let str = count > 1 ? "times" : "time";
    clicksNumber.innerText = ` ${count} ${str}`;
});
