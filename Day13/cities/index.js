"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi");
describeCity("Islamabad");
describeCity("Tokyo", "Japan");
