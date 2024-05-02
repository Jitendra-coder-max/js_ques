
const isEmpltyObject = (obj) => {


    if(Object.keys(obj).length<=0 ){
        return 'empty'
    }

    else{
        return `not empty values are ${Object.entries(obj)}`
    }
}


console.log(isEmpltyObject(person = {name : 'jit'}))
console.log(isEmpltyObject({}))
console.log(isEmpltyObject({keywith: null}))
console.log(isEmpltyObject({keywithu: undefined}))