


function Checkprime(num){

    if(num <=1){
        return false
    }


    for(let i = 2; i<=num/2; i++){
        if(num%i ==0){
            return false
        }
    }

    return true
}




let num = 9;

console.log(Checkprime(num))


