let userProfile = (function(){
    let name: string = "Asad";
    let age: number = 60

    return {
        displayInfo: function(){
            console.log(`Name: ${name}, Age: ${age}`);
        }
    }
})();

userProfile.displayInfo();

