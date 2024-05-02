



const dupliArr = (arr) => {
   
    // let filteredArr =   arr.filter((val, index, arr) =>  arr.indexOf(val) ==index )
    // return filteredArr;
let unique = []

for(let i = 0; i<arr.length; i++){
//  if(unique.indexOf(arr[i]) == -1)
//  unique.push(arr[i])

// }

if(!unique.includes(arr[i])){
    unique.push(arr[i]);
}



}
return unique;
}

console.log(dupliArr([12,32,54,65,21,12]))