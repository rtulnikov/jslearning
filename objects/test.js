const a = {
    num: 0,
    arr: [],
    func: function(nuber, uvelichenie){
        a.arr.push({reson:uvelichenie, sum: nuber})
        return a.num += nuber
    }
}

console.log(a.num)
// a.arr = 'num + 2'
console.log(a)

a.func(400,"увеличение num")
a.func(500,"увеличение num")
console.log(a.num)
// [
//     {reson: "увеличение num", sum: 100},
//     {reson: "увеличение num", sum: 200},
// ]
console.log(a.arr)