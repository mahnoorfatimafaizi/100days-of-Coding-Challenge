"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Truck);
