let priceSet1: number[] = [50000, 100000, 150000];
let priceSet2: number[] = [75000, 120000, 170000];

let combinedPrices:number[] = [...priceSet1, ...priceSet2];
combinedPrices.sort((a,b) => a-b);

console.log(combinedPrices);