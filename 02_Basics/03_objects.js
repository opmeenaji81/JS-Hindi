// singleton

// object literals
//Object.create  //constructor method

const mySym = Symbol("key1")


const JsUser = {
    name: "Radhe",
    "full name": "Radhe Krishna",
    [mySym]: "mykey1",
    age: 18,
    location: "Sehore",
    email: "mrmeenaji@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

