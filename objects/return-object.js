const users = [
    {
        name: "Вася",
        surname: "Пупкин",
        age: 15,
        skills: ["JavaScript", "Java", "HTML", "CSS", "React"],
    },
    {
        name: "Катя",
        surname: "Смирнова",
        age: 12,
        skills: ["HTML", "CSS", "React"],
    },
]

//Привести к такому виду
// [
//     {
//         fullName: "Вася Пупкин",
//         skillCount: 5,
//     },
//     {
//         fullName: "Катя Смирнова",
//         skillCount: 3,
//     }
// ];



function getNewObject(array){
   return array.map( (obj) =>{
    return {
        fullName: obj.name + obj.surname,
        skillCount: obj.skills.length,
    }
})}
console.log(getNewObject(users))