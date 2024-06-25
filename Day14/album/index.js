"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Taylor Swift", "1989");
let album2 = make_album("The Beatles", "Abbey Road");
let album3 = make_album("Adele", "25", 11);
console.log(album1);
console.log(album2);
console.log(album3);
