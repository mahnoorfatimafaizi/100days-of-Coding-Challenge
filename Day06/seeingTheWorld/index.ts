let places: string[] = ["Kyoto", "Istanbul", "New York", "Machu Picchu", "Barcelona"];
console.log("Original Order: ", places);

console.log("Alhabetical Order:", [...places].sort());
console.log("Original Order:", places);

console.log("Reversed Order:", [...places].sort().reverse());
console.log("Original Order:", places);

places.reverse();
console.log("Reversed Order:", places);