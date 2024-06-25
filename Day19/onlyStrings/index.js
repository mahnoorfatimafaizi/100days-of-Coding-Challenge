"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array = [4, "blue", false, "green", 8, "yellow", true, "pink", 7, 3, false];
let onlyStrings = array.filter(item => typeof item === 'string');
console.log(onlyStrings);
