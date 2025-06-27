let playerHp = 100;
let enemyHp = 100;

while(playerHp > 0 && enemyHp > 0) {
    let shoot = confirm('стрелять?')
    if(!shoot ) {
        break
    }
    let enemyDamage = Math.ceil(Math.random() *20);
    let enemyCritDamage = Math.ceil(Math.random() *10);
    let enemycrit = enemyCritDamage > 7 ? 1.5 : 1;
    enemyDamage = Math.ceil( enemyDamage * enemycrit);

    let myDamage = Math.ceil(Math.random() *20);
    let myCritDamage = Math.ceil(Math.random() *10);
    let mycrit = myCritDamage > 7 ? 1.5 : 1;
    myDamage = Math.ceil( myDamage * mycrit);

    enemyHp -= myDamage;
    playerHp -= enemyDamage;

    alert(`
        нам нанесли ${enemyDamage}
         у нас осталось ${playerHp} 
         Мы нанесли ${myDamage}
         у него осталсь ${enemyHp} `)
}
if(playerHp > 0 && enemyHp < 0) {
    alert('Вы победили')
} else if(enemyHp > 0 && playerHp < 0) {
    alert('Вы проиграли')
} else {
    alert('ничья')
}
