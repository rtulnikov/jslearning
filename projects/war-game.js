const MAX_DAMAGE = 20;
const CRIT_MULTIPLICATOR = 1.5;
const HP = 100;
const CRIT_CHANCE = 0.3;


const displayGameState = (enemyDamage, playerHp, myDamage, enemyHp) =>{
     alert(`
        нам нанесли ${enemyDamage}
         у нас осталось ${playerHp} 
         Мы нанесли ${myDamage}
         у него осталсь ${enemyHp} 
         `);
}
const calculateDamage = () =>{
    let damage = Math.ceil(Math.random() * MAX_DAMAGE);
    return Math.random() < CRIT_CHANCE ? Math.ceil(damage * CRIT_MULTIPLICATOR)  : damage;
} 

const gameStart = () =>{

    let playerHp = HP;
    let enemyHp = HP;

    while(playerHp > 0 && enemyHp > 0) {
        let shoot = confirm('стрелять?')
        if(!shoot ) {
        break
        }
        let enemyDamage =  calculateDamage();
        let myDamage = calculateDamage();

        enemyHp -= myDamage;
        playerHp -= enemyDamage;

        displayGameState(enemyDamage, playerHp, myDamage, enemyHp)
    }

    switch(true) {
        case playerHp > 0 && enemyHp < 0 :
            alert('Вы победили');
            break;
        case enemyHp > 0 && playerHp < 0 : 
            alert('Вы проиграли');
            break;
        default :
            alert('ничья');
    }
}

gameStart();