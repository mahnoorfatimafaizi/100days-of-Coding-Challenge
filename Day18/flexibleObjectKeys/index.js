"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createFlexibleObject(...entries) {
    let flexibleObject = {};
    for (let [key, value] of entries) {
        flexibleObject[key] = value;
    }
    ;
    return flexibleObject;
}
;
let userLables = createFlexibleObject([`section1`, `Introduction`], [`section2`, `Body`], [`section3`, `Conculsion`]);
console.log(userLables);
