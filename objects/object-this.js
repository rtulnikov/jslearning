const greet = function () {
    return "Привет, " + this.name;
};


const dima = {
    name: "дима",
    age: 5,
    greet
};
const ratmir = {
    name: "ратмир",
    age: 11,
    greet: greet,
};
console.log(ratmir.greet())
console.log(dima.greet());

const userActions = {
    run: function(){
        console.log(this.name + ' бежит')
    },
    walk(){
        console.log(this.name + ' идет')
    },
    
}
const user = {
    name: 'Вася',
    role: 'user',
    run: userActions.run,
    walk: userActions.walk,
}
const admin = {
    name: 'Петя',
    role: 'admin',
    run: userActions.run,
    walk: userActions.walk,
}
const moderator = {
    name: 'Коля',
    role: 'moderator',
    run: userActions.run,
    walk: userActions.walk,
}
admin.run()

setTimeout( () => user.run(),2000)

function test(){
    user.run();
    admin.walk()
}