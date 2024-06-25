"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["usr1", "usr2", "usr3", "usr4", "admin", "usr5"];
if (users.length === 0) {
    console.log("We need to find some users.");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users.");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
