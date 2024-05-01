
const shuffleAr = (arr) => {

    for(let i = arr.length -1 ; i>0; i--){
        const j =   Math.floor(Math.random()* (i));
        console.log(j);
           [arr[i],arr[j]] = [arr[j], arr[i]];
    }

    return arr
}
const myArray = [1, 2, 3, 4, 5];
console.log(shuffleAr(myArray))