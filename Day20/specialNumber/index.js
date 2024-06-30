"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAdder(addend) {
    return function (num) {
        return num + addend;
    };
}
const addFive = createAdder(5);
console.log(addFive(10));
console.log(addFive(20));
console.log(addFive(30));
const addTen = createAdder(10);
console.log(addTen(35));
console.log(addTen(45));
console.log(addTen(55));
