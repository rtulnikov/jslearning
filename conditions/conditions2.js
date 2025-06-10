let conf = confirm('Ты готов к бою?');
if (conf === true) {
console.log('Начинаем игру.');

    const rank = prompt('Какое у тебя воинское звание? (рядовой / сержант / лейтенант)').trim().toLowerCase();
    // console.log(typeof(conf));
    console.log('Ваше звание ' + rank);
    console.log(rank.trim());

    // if (rank === 'рядовой') {
    //     console.log('Выполняйте приказ! Защитите позицию!')
    // } else  if (rank === 'сержант') {
    //     console.log('Доложите о готовности! Вы ведущий в бой.')
    // } else  if (rank === 'лейтенант') {
    //     console.log('Ваша задача — координация! Направляйте подразделения.')
    // } else {
    //     console.log('Неизвестное звание. Ждите подтверждения...')
    // }

    switch(rank) {
        case 'рядовой' : 
            console.log('Выполняйте приказ! Защитите позицию!');
            break;
        case 'сержант' : 
            console.log('Доложите о готовности! Вы ведущий в бой.')
            break;
        case 'лейтенант' : 
            console.log('Ваша задача — координация! Направляйте подразделения.')
            break;
        default : 
            console.log('Неизвестное звание. Ждите подтверждения...')
    }

} else {
    console.log('Как будешь готов, заходи!')
};
