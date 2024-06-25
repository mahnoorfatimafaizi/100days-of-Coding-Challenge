"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Blaine", "Shin Lim", "Harry Houdini"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let magician of magicians) {
        console.log(`Great ${magician}`);
    }
}
;
makeGreat(magicians);
