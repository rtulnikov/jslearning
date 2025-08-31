const students = [
  { name: "Анна", age: 20 },
  { name: "Марк", age: 22 },
  { name: "Юля", age: 19 }
];
console.log(students[0])

let array = [];
// for(let i = 0; i < students.length; i++) {
//   array.push(students[i].name);
// }

// for(let elem of students){
//     array.push(elem.name)
// }

// for(let i in students){
//     array[i] = (students[i].name)
// }
console.log(array)

// const arr = students.map( (elem) => elem.name )

console.log(students.map( (elem) => elem.name ))
