// const obj = { b: 2, c: 1, a: 3 };

// const sortedOb =Object.keys(obj).sort((a,b) =>obj[a]-obj[b]);

// // console.log(sortedOb)

// const newOb = {}

// for(let key of sortedOb){

//     newOb[key] = obj[key]
// }

// console.log(newOb)



const obj = { b: 2, c: 1, a: 3 };



const arrOb = Object.entries(obj);

console.log(arrOb)

const sortedArr =arrOb.sort((a,b) => a[1]- b[1])
console.log(sortedArr)


 const newOb = Object.fromEntries(sortedArr)
 console.log(newOb)