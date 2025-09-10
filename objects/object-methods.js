
const user_luser = {
    name: "Вася",
    surname: "Пупкин",
    age: 15,
    skills: ["JavaScript", "Java", "HTML", "CSS", "React"],
    getFullName: function () {
        return user_luser.name + " " + user_luser.surname;
    },
    getSkillCount(){
        return user_luser.skills.length
    }
};
console.log(user_luser.getFullName());
console.log(user_luser.getSkillCount());

user_luser.getFirstSkill = function() {
    return user_luser.skills[0]
}
console.log(user_luser)

