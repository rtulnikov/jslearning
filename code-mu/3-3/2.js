//Проверьте, что все цифры этого числа являются нечетными.
let number = 13578
number = String(number)
let nechet = false
function chet(){
        for(let i = 0; i< number.length; i++){
    if(number[i] % 2 != 0) {
        nechet = true
    }else{
        return nechet = false
    }
    }
    
    return nechet
}
console.log(chet())