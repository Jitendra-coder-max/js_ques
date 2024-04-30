



// function facto(n){
//     let result =1
// for(let i =1;i<=n; i++){

//     result = result*i
// }

// return result


// }

// console.log(facto(5))

function facto(n){
    if(n<=0){
        return 1
    }

    let fact = n * facto(n-1) 
    
    return fact
}

console.log(facto(6))





console.log(facto(5))