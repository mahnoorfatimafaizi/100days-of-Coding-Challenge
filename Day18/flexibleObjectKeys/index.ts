type FleixbleObject = {
    [key:string]: string
};

function createFlexibleObject (...entries: [string,string][]): FleixbleObject {
    let flexibleObject: FleixbleObject = {}

    for (let [key,value] of entries) {
        flexibleObject[key] = value;
    };

    return flexibleObject
};

let userLables = createFlexibleObject ( 
    [`section1`,`Introduction`],
    [`section2`, `Body`],
    [`section3`, `Conculsion`]
);

console.log(userLables);