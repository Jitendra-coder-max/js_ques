


// const pValid = (pwd) => {


    
// }

// console.log(pValid('ABCDeFGF1'))

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(password) ? "Password is valid." : "Password is not valid.";
}

// Example usage:
var password = "MyPassword123!";
console.log(validatePassword(password)); // Output: "Password is valid."
