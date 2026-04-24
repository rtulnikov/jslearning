
const user_luser = {
    name: "Вася",
    surname: "Пупкин",
    age: 15,
    skills: ["JavaScript", "Java", "HTML", "CSS", "React"],
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    getSkillCount(){
        return this.skills.length
    }
};
console.log(user_luser.getFullName());
console.log(user_luser.getSkillCount());

user_luser.getFirstSkill = function() {
    return this.skills[0]
}
console.log(user_luser)

