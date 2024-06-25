"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hobbies(...hobbies) {
    for (let hobby of hobbies) {
        console.log(`I enjoy ${hobby}`);
    }
}
hobbies("painting", "reading", "sleeping");
