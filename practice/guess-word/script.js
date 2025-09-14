/*создать массив слов
получить случайное слово

пока не угадано слово :
    показать состояние черточками
    запросить букву
    есди отмена - выйти из игры
    если нет буквы то написать вы не ввели букву
    если ввел несколько букв то написать можно только одну букву
    
    если он ввел букву - проверить буква:
    если есть в слове - написать вы угадали
    если нет - написать вы не угадали
вывести результат
*/
const words = ["книга", "стол", "окно", "машина"];
const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
let wordLen = word.length;


let result = [];
for (let i = 0; i < word.length; i++) {
    result.push("_");
}

// while (result.includes("_")) {
while(wordLen > 0){
    alert(result.join(" "));
    let guess = prompt("Введите букву");

    if (guess == null) {
        alert("Вы вышли из игры");
        break;
    }
    if (!guess) {
        alert("вы не ввели букву");
        continue;
    }
    if (guess.length > 1) {
        alert("можно только одну букву");
        continue;
    }
    guess = guess.toLowerCase();
    if (word.includes(guess)) {
        alert("Вы угадали");
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                result[i] = guess;
                wordLen--
            }
        }
    } else {
        alert("Вы лошара вы не угадали");
    }
}
if (!wordLen) {
    alert(`было загадано слово ${result.join("").toUpperCase()}`);
}
