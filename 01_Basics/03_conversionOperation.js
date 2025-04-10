let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33" => NaN
// true => 1; false => 0 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************ Operatoins ********* 

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "radhe"
let str2 = " krishna"

let str3 = str1 + str2
console.log(str3);








console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2") // 32



console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2 // not write like this

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

