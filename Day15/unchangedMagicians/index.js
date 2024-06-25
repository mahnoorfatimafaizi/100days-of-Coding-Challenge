"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Blaine", "Shin Lim", "Harry Houdini"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
let greatMagicians = makeGreat([...magicians]);
console.log("Original magicians:");
showMagicians(magicians);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
