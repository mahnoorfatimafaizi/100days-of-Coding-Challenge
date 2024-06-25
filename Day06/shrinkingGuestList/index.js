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
    console.log(`${guestList[i]},Sorry the table is unavaible at dinner time. I can only invite two people.`);
}
while (guestList.length > 2) {
    let removedguests = guestList.pop();
    console.log(`${removedguests}, Sorry I can't invite you to the dinner.`);
}
;
guestList.forEach(guestList => {
    console.log(`${guestList}, You're still invited to dinner.`);
});
guestList.pop();
guestList.pop();
console.log(guestList);
