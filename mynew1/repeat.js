
const Numrepeat = (str,n) => {

// let newStr = ' '
//     for(let i = 1; i<=n; i++){
//         newStr = newStr+ str
//     }
// return newStr;

return  n>0 ? str.repeat(n): str;

}

console.log(Numrepeat('abc',5))