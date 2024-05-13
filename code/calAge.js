
const calAge = (age) => {


    const currentDate = new Date();
      const myAge = new Date(age);
      const diffYear =(currentDate.getFullYear() - myAge.getFullYear())        ///givesw value in miliseconds
        const diffMonth = (currentDate.getMonth()- myAge.getMonth())
        console.log(diffYear)
        console.log(diffMonth)
     
}



console.log(calAge('1998-07-11'))