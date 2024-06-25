let array: any[] = [4, "blue", false, "green", 8, "yellow", true, "pink", 7, 3, false];

let onlyStrings: string[] = array.filter(item => typeof item === 'string');

console.log(onlyStrings);