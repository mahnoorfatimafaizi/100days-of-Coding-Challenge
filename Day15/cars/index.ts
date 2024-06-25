function makeCar(
    manufacturer: string,
    model: string,
    ...options: [string , any][]
){
    let car: { manufacturer: string; model: string; [key: string]: any } = {manufacturer, model};
    return car;
}

console.log(makeCar("Toyota", "Carolla", ["Colour", "Blue"], ["Year", "2020"]));
console.log(makeCar("Ford", "Fiesta", ["Colour", "Black"], ["Sunroof", "True"]));
  