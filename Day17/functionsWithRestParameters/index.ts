function hobbies (...hobbies: string[]):void {

    for (let hobby of hobbies){
        console.log(`I enjoy ${hobby}`)
    }
}
hobbies("painting", "reading", "sleeping");