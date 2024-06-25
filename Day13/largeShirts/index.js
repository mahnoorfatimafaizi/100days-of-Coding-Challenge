"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirts(size = "Large", message = "I love TypeScript!") {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}.`);
}
makeShirts();
makeShirts("Medium");
makeShirts("Small", "Coding is fun!");
