// // const promise = new Promise((resolve,reject) => {
// //     setTimeout(() => resolve('Done!'),200)
// // })



// const promise = new Promise((resolve,reject) => {

//     let wordDay = false;

//     if(wordDay){

//         resolve('worked')
//     }

//     else{
// reject('not worked')
//     }
// })


// promise.then((result) => 
// console.log(result))
// .catch((result) => 
// console.log(result))





const promise = new Promise((resolve,reject) => {
    setTimeout(()=> {
resolve('promise resolved')
    },3000)
})


const asyncFunc = async() => {

    let result = await promise;
    console.log(result)
}

asyncFunc()