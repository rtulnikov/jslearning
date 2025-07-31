let str = '88';
console.log(str.padStart(4, '-'))
console.log(str.padEnd(4, '-'))
//*   ******6130 */

const hidePhoneNumber = (phone) => {
    let endPhone = phone.slice(-4)
    return endPhone.padStart(10, '*')
}

console.log(hidePhoneNumber('9165696130'))
