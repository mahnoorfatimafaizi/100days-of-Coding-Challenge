let magicians: string[] = ["David Blaine", "Shin Lim", "Harry Houdini"];

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

let greatMagicians: string[] = makeGreat([...magicians]);

console.log("Original magicians:");
showMagicians(magicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);

