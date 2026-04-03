//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = "1l82pds45";

for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
        console.log(i);
        break;
    }
}
