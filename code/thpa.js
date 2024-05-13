
// const person = { b: 2, c: 1, a: 3 };

//   const personArr = Object.entries(person);

 


//     // const personSort =     personArr.sort((a,b) => a[1]-b[1]) // by value
//     const personSort =     personArr.sort((a,b) => a[0].localeCompare(b[0])) // SPRT BASED on key
//     console.log(personSort)

//     const personOb =    Object.fromEntries(personSort)
//     console.log(personOb)


const person = { b: 2, c: 1, a: 3 };


     const arrOb =  Object.keys(person).sort()

     console.log(arrOb)

     const resultob = {}

     for(let key of arrOb){

        resultob[key] =    person[key]
     }

     console.log(resultob)