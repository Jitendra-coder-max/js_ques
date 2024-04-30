
function perfect(num){


    if(num<=0){
        return false;
    }

let sum = 0
    for(let i = 1; i<=num/2; i++){
 
        if(num%2 ==0){
            sum = sum+ i
        }
    }

    return sum == num
}


let num = 6;

console.log(perfect(num))
