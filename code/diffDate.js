
const diffDate = (date1,date2) => {

 

     const currentDate =        new Date();
                    
     console.log(currentDate.getDate())
     console.log(currentDate.toLocaleTimeString())



    //  const diff = Math.abs(new Date(date1) - new Date(date2))/(24*60*60*1000)
    //  console.log(diff)

        // const firstDate =        new Date(date1)
        // const secondDate = new Date(date2)

        //    const diff = Math.round(Math.abs((secondDate - firstDate)/(24*60*60*1000)))
        //    console.log(diff)
        //    return diff;

      

       

}

console.log(diffDate('2024-01-01', '2024-01-31'))