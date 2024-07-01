"use strict";
let age = 25;
age = 26;
console.log(age);
const name1 = "Alice";
try {
    name1 = "Bob";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
