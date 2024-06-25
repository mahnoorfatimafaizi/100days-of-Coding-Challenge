let ordinalNumbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let ordinalNumber of ordinalNumbers) {
    if(ordinalNumber === 1){
        console.log("1st");
    } else if (ordinalNumber === 2){
        console.log("2nd");
    } else if (ordinalNumber === 3){
        console.log("3rd");
    } else {
        console.log(`${ordinalNumber}th`);
    }
}