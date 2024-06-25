"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Masooma", "Bisma", "Zainab"];
guestList.pop();
guestList.push("Fizza");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, You are invited for dinner at my house today.`);
}
