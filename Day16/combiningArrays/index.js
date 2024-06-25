"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let priceSet1 = [50000, 100000, 150000];
let priceSet2 = [75000, 120000, 170000];
let combinedPrices = [...priceSet1, ...priceSet2];
combinedPrices.sort((a, b) => a - b);
console.log(combinedPrices);
