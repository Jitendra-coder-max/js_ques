let arr1= [1,3,5];
let arr2=[2,4,8];


let merge = []

for(let i = 0; i<arr1.length; i++){

    merge.push(arr1[i])
}

for(let i = 0; i<arr2.length; i++){

    merge.push(arr2[i])
}

console.log(merge)

// let result = [];

for(let i =0; i<merge.length; i++){
    for(let j =1; j<merge.length; j++){

        let temp = merge[i];
        merge[i] = merge[j];
        merge[j] = temp;
    }
}

console.log(merge)
