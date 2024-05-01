function productOfArrayExceptSelf(array){
    var resultArray = [], product;
    for(var i = 0; i < array.length; i++){
      product = 1;
      for(var j = 0; j < array.length; j++){
         if(i !== j) product *= array[j];
      }
      resultArray.push(product);
    }
    return resultArray;
}

// Sample data
var array = [1,2,3,4];
console.log(productOfArrayExceptSelf(array));