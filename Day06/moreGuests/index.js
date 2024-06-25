"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Masooma", "Bisma", "Zainab"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}, GOOD NEWS I have found a bigger table.`);
}
guestList.unshift("Sana");
guestList[4] = "Fatima";
guestList.push("Zehra");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are invited for dinner tommorrow.`);
}
