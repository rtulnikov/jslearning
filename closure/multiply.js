function multiplyBy(numb) {
    return function (numbUmn) {
      console.log( numb * numbUmn)
        return numb * numbUmn
    }
}



const double = multiplyBy(2)
const threeple = multiplyBy(3)
const fourple = multiplyBy(4)

double(4)
threeple(6)
fourple(8)