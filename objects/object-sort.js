const students = [
  { name: "Анна", age: 20 },
  { name: "Марк", age: 22 },
  { name: "Юля", age: 19 }
];

//сортируем по возрасту
students.sort( (obj1, obj2) => obj1.age - obj2.age);
console.log(students)

//сортируем по алфавиту
students.sort( (obj1,obj2) => {
    if(obj1.name > obj2.name) {
        return 1;
    }else if(obj1.name < obj2.name) {
        return -1;
    }else{
        return 0;
    }
})
console.log(students)