const user1={}
const user2={name: 'dima'}
const user3={name: 'petiy'}

user1[user2] = 'aha'
user1[user3] = 'naha'

console.log(user1[user2]) //мне кажется он выведет ошибку или ничего потому что у нас нету ключа user2
console.log(user1[user3]) //мне кажется он выведет ошибку или ничего потому что у нас нету ключа user3

//вывод1 не все так просто как кажется
//вывод2: когда мы пишем console.log(user1[user2]) и console.log(user1[user3] то они будут приведену к типу string и из-за этого мы написали console.log(user1[user3])console.log(user1[user3])  и ключ автоматически добавляется в объект с этим значением