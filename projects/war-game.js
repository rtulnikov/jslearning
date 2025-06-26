let playerHp = 100;
let enemyHp = 100;

while(playerHp > 0 || enemyHp > 0) {
    let shoot = confirm('стрелять?')
    if(shoot) {
        enemyHp -= 20;
    }
    console.log(enemyHp)
}

