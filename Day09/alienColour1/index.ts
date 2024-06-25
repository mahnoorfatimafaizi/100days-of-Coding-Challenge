import { appendFile } from "fs/promises";

let alienColour: string = 'green';

if(alienColour == 'red'){
    console.log("Opps! You lose the game");
}
else if (alienColour == 'green'){
    console.log("You have earned 5 points.")
}