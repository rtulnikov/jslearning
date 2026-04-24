
function parent(per) {
    let value = 0;

     return function () {
        value += per
        console.log(value)
    }
  
}
let count = parent(10)
count()
count()
count()


function func() {
    let value = 0

    return {
        plus1(ff) {
            value+=ff
            console.log(value)
        }
    }
}
let pur = func()
pur.plus1(2)


function createCounter(numb) {
    let value = numb
    return {
        increment(number = 1) {
            value += number;
            console.log(value)
        },
        decrement(number = 1) {
            value -= number;
            console.log(value)
        },
        getValue() {
            return value
        },
        reset() {
            value = numb
        }
    }
}


const counter = createCounter(10);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue()); // 11
counter.reset()
console.log(counter.getValue()); // 11
console.log(counter.value); // undefined

