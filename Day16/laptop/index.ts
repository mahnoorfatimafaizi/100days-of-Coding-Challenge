let laptop = {
    make: "Dell",
    model: "XPS-14",
    year: 2024,
    describe:function (){
        console.log(` Latest Laptop of ${this.make} ${this.year} is ${this.model} `)
    }
}
laptop.describe();