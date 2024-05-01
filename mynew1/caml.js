


function toCamel(str){

    let newStr=  str.split(' ')
       
   let uperStr = newStr.map((word,index) => {

if(index ===0){

    return word.toLowerCase()
}
else{
    return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
}


    } )

    return uperStr.join('')
  
  }
  
  
  console.log(toCamel('hello world hittu'))