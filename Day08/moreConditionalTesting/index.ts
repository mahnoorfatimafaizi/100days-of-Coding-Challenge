// Tests for equality with strings
let abcd: string = 'one';
let efgh: string = 'two';

console.log("Equality:", abcd === 'one');
console.log("Equality:", abcd === efgh);

// Tests for inequality with strings
console.log("Inequality:", abcd !== 'two');
console.log("Inequality:", efgh !== 'two'); 

// Tests Using the Lowercase Function
let colour: string = 'blue';

console.log("Lower Case:", colour.toLowerCase() === 'blue');
console.log("Lower Case:", colour.toLowerCase() === 'BLUE');

// Numerical Tests Involving Equality and Inequality
let num1: number = 10;
let num2: number = 15;

console.log("Equality:", num1 === 15);
console.log("Equality:", num2 === 15);

console.log("Inequality:", num1 !== num2);
console.log("Inquality:", num1 !== 10);

// Greater Than & Less Than
console.log("Greater Than:", num2 > num1);
console.log("Greater Than:", num1 > num2);

console.log("Less Than:", num2 < num1);
console.log("Less Than:", num1 < num2);

// Greater Than and Equal to & Less Than and Equal to 
console.log("Greater Than & Equal to:", num1 >= 10);
console.log("Greater Than & Equal to:", num2 >= 20);

console.log("Less Than & Equal to:", num1 <= 5);
console.log("Less Than & Equal to:", num2 <=15);

// "and" and "or" Operators

let var1: boolean = true;
let var2: boolean = false;

console.log("'and' Operator:", var1 && var1);
console.log("'and' Operator:", var1 && var2);

console.log("'or' Operator:", var1 || var2);
console.log("'or' Operator:", var2 ||  var2);

// Item in an array 
let colours: string [] = ["red", "yellow", "blue"];

console.log("colour in array:", colours.includes("red"));
console.log("colour in array:", colours.includes("pink"));

// Item not in an array
console.log("colour not in array:", !colours.includes("pink"));
console.log("colour not in array:", !colours.includes("blue"));