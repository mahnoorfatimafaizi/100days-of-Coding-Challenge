let magicians: string[]= ["David Blaine", "Shin Lim", "Harry Houdini"]; 

function showMagicians(magicians: string[]): void{
    for (let magician of magicians){
        console.log(magician);
    }
}

function makeGreat(magicians:string[]): void {
    for (let magician of magicians)
    {
    console.log(`Great ${magician}`);
    }
};

makeGreat(magicians);