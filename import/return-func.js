const getRank = () =>{
    let ranks = ['рядовой', 'сержант', 'лейтенант'];

    let index = Math.floor(Math.random() *ranks.length);
    let rank = ranks[index];  
    return rank;
}


let rank = getRank();

let damage = 25;
let exp = Math.floor(Math.random()  * 10 + 1);
let crit = exp > 7 ? 1.75 : 1.25;

switch (rank) {
    case 'рядовой' : 
        damage =  exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Выполняйте приказ! Защитите позицию! Ваш урон ' + damage);
        break
    case 'сержант' : 
        damage = 30;
        damage = exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Доложите о готовности! Вы ведущий в бой. Ваш урон ' + damage)
        break
    case 'лейтенант' :
        damage = 35; 
        damage = exp > 5 ?  Math.ceil(damage * crit) : damage;
        console.log('Вы - ' + rank);
        console.log('Ваша задача — координация! Направляйте подразделения. Ваш урон ' + damage)
        break
    default : 
        console.log('Неизвестное звание. Ждите подтверждения...')
};