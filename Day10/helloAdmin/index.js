"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["usr1", "usr2", "usr3", "usr4", "admin", "usr5"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, Would like see a status report?");
    }
    else {
        console.log(`Hello ${user}, Thank You are logging in again!`);
    }
}
