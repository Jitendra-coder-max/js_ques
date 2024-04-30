



const flatten =(arr) => {

    let result = [];
    for(let val of arr){

        if(Array.isArray(val)){
result = result.concat(flatten(val))
        }

        else{

            result.push(val)
        }
    }

     return result;
}




let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]

console.log(flatten(arr))