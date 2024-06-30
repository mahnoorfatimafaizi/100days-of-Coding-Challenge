function createAdder(addend: number): (num: number) => number {
    return function (num: number): number {
        return num + addend;
    };
}

const addFive = createAdder(5);

console.log(addFive(10));
console.log(addFive(20));
console.log(addFive(30));


const addTen = createAdder(10);

console.log(addTen(35));
console.log(addTen(45));
console.log(addTen(55));