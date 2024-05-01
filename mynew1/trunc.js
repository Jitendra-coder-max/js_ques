
const truncFunc = (str,num) => {
    // let newStr='';
    // for(let i =0; i<num; i++){
    //     newStr += str[i]

    // }
    // return newStr;

    return  str.slice(0,num)

}


console.log(truncFunc('hello my name is jit',8))