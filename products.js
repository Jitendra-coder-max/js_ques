
// const products = [
//     { name: 'apples', category: 'fruits' },
//     { name: 'oranges', category: 'fruits' },
//     { name: 'potatoes', category: 'vegetables' }
//   ];

//         let newproducts = {
          
//             fruits: [],
//             vegetables: []
//         }


//         products.forEach((product) =>{
//             if(product.category ==='fruits'){
//                 newproducts.fruits.push(product)
//             }

//             else if(product.category ==='vegetables'){
//                 newproducts.vegetables.push(product)
//             }
//         })

//         console.log(newproducts)
 
// //   const products = {
// //     fruits: [
// //      { name: 'apples', category: 'fruits' },
// //      { name: 'oranges', category: 'fruits' },
// //     ],
// //     vegetables: [
// //     { name: 'potatoes', category: 'vegetables' }]
    
// //  }; ?


//////////////////////////////////////////////////////

function groupByCategory(arr) {
    const objMap={};
    arr.forEach(data => {
       if(objMap[data.category]) {
         objMap[data.category].push(data);
         console.log(objMap[data.c])
       } else {
         objMap[data.category] = [data];
       }
    });
    // return objMap;
  }
  
  const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
  ];
  
  let result = groupByCategory(products); 
  console.log('result', result); 
  
  /* ---output ----
  
  const products = {
     fruits: [
      { name: 'apples', category: 'fruits' },
      { name: 'oranges', category: 'fruits' },
     ],
     vegetables: [
     { name: 'potatoes', category: 'vegetables' }]
     
  };
  */