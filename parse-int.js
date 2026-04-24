const num1 = "123afd12";
const num2 = "2.3abnd2112";

console.log(typeof parseInt(num1));

console.log(parseFloat(num2));
console.log(parseInt(num2));

function parent(someVal) {
    let value = 0;

    return () => {
        value += someVal;
        console.log(value);
    };
}
const count = parent(2);
count();
count();
count();

function increase() {
    let value = 0;
    return {
        plus() {
            value++;
            console.log(value);
        }
    }
}
const plus1 = increase();
plus1.plus();
plus1.plus();

function multiplyTo(num) {
    return (value) => {
        value *= num;
        console.log(value);
    };
}
const multiplyTo10 = multiplyTo(10);
const multiplyTo100 = multiplyTo(100);
multiplyTo100(5);
multiplyTo10(5);

const privateCounter = (() => {
    let myValue = 0;
    console.log(`Изначальное значение - ${myValue}`);

    return () => {
        myValue += 1;
        console.log(myValue);
    };
})();

privateCounter();
privateCounter();
privateCounter();

function createCounter(number) {
    let value = number;
    return {
        increment(step = 1) {
            value += step;
            return this;
        },
        decrement(step = 1) {
            value -= step;
            return this;
        },
        getValue() {
            return value;
        },
        reset() {
            value = number;
            return this;
        }
    };
}
const counter = createCounter(10);
counter.increment(2).increment(2).decrement().reset();
console.log(counter.getValue()); 