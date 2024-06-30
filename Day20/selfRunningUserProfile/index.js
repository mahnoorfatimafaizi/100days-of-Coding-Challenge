"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userProfile = (function () {
    let name = "Asad";
    let age = 60;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
