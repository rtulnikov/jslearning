let szhetchik = 0;
const int = setInterval(() => {
    szhetchik++;
    if (szhetchik == 3) clearInterval(int);
    console.log("Привет, Ратмир");
}, 2000);
