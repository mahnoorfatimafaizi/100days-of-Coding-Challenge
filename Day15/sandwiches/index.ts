function sandwichItems(...items :string[]){
    console.log("Following Items must be added in a Sandwich:");
    for (let item of items){
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!")
}

sandwichItems("Cheese", "Tomattos", "Peppers");

sandwichItems("Olives", "Egg");

sandwichItems("Peanut Butter")
