class Car{
    //constructor: initial setup for the class
    constructor(brand,color,noOfWheel,price,name){
        this.brand = brand;
        this.color = color;
        this.noOfWheel= price;
        this.name = name;
    }
    //features
    start(){
        console.log(`${this.name} has started`)
    }
    horn(){
        console.log(`The car, ${this.name} sounds peep. It's price is ${this.price} and has ${this.color} color`)
    }
}

//creating instance or object of car
let fordObj = new Car("FORD","RED",4,"600000000","Ford t5")
console.log("ford car brand:", fordObj.name)
fordObj.start()
fordObj.horn()

let bydObj = new Car("BMW","BLACK",4,"900000000","BMW 15")
console.log("ford car brand:", bydObj.name)
bydObj.start()
bydObj.horn()

