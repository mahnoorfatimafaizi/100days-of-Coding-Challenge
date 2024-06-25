"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    return car;
}
console.log(makeCar("Toyota", "Carolla", ["Colour", "Blue"], ["Year", "2020"]));
console.log(makeCar("Ford", "Fiesta", ["Colour", "Black"], ["Sunroof", "True"]));
