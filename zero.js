const arr = [1,0,0,1,1,0,1]
let result = []
let count = 0;

for(let i =0; i<arr.length; i++){

    if(arr[i] ===0){
count++;
result.push(arr[i])
    }
}


for(let i =0 ;i<count;i++ ){
    result.push(1)
}

console.log(result)