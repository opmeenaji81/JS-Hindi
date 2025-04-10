const accountID = 144553
let accountEmail = "mrmeenaji@gamil.com"
var accountPassword = "12345"
accountCity = "Bhopal"

/*
Prefer not to use var because of issue in 
block scope and functional scope
*/

console.log(accountID);
console.log(accountEmail);

console.table([accountID, accountEmail, accountPassword,
    accountCity
])