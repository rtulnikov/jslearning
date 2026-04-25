//Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
let arr = [158,87,954]

function three(){
    for(let i = 0; i< arr.length; i++){
        if(String(arr[i]).includes('3')) {
            return true
        }
}
return false
}
console.log(three())