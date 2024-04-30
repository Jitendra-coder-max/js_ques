
function findMaxSumSubArray(arr) {
    let currentSum=0;
    let maxSum=0;
    for(let i=0;i < arr.length;i++) {
      if(currentSum < 0) {
         currentSum = 0;
      }
      currentSum += arr[i];
      maxSum = Math.max(currentSum,currentSum); 
    }
    return maxSum;
 }
 
 let arr= [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 let result = findMaxSumSubArray(arr); 
 console.log('result', result); //output:  result 6