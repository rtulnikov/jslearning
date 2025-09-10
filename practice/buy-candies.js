const CHOCOLATE_PRICE = 10;
const CARAMEL_PRICE = 3;
const maxCount = 5;

const buyCandies = (money) => {
    let chocolateCount = Math.floor(money / CHOCOLATE_PRICE);
    if(chocolateCount > maxCount) chocolateCount = maxCount;

    let changeOfChocolate = money - CHOCOLATE_PRICE * chocolateCount;


    let caramelCount = Math.floor(changeOfChocolate / CARAMEL_PRICE);
    let change = changeOfChocolate - caramelCount * CARAMEL_PRICE;
    return [chocolateCount,  caramelCount, change];
}
//рефакторинг
const calculateCandies = (money, price, maxCount) => {
    if(money === undefined) {
        console.log('Где деньги,Лебовски?')
        return false;
    }
    let count = Math.floor(money / price);
    if(count > maxCount && maxCount !== undefined) count = maxCount;
    let change = money - price * count;
    return [count, change]
}
// const [eye, nose] = bodyParts;

const buyallCandies = (money) => {
    let [chocolateCount,afterChocolate] = calculateCandies(money, CHOCOLATE_PRICE, maxCount);
    let [caramelCount,change] = calculateCandies(afterChocolate, CARAMEL_PRICE);

    return [chocolateCount,  caramelCount, change];
}
const result = buyallCandies(60);


console.log(`${result[0]} шоколадок, ${result[1]} карамели, ${result[2]} р. сдача`);


