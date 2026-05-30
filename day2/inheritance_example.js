class Vehicle{
    constructor (name){  //name:property
        this.name = name
    }

    //feature
    move(){
        console.log(`vehicle ${this.name} can move`)
    }
}

//inheriting vehicle class
class Car extends Vehicle{
    constructor(name){
        //providing value to the parent constructor
        super(name)  //super : calls constructor
        this.color = this.color
    }
    start(){
        console.log(`Car ${this.name} has started`)
    }
}
let fordObj = new Car ("FORD V!","grey")
fordObj.move()
fordObj.start()