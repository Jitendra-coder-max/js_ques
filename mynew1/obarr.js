const myOb = (obj) => {
    let newArr = Object.entries(obj)
    // console.log(newArr.flat())
// let newOb = {}

// for(let [key,value] of newArr){
//     newOb[key] = value;

// };
      let newObj=   Object.fromEntries(newArr)
      return newObj;

// return newOb;
}


const person = { name: "jiten", age: 25, city: "Bhopal" };


 

console.log(myOb(person))
