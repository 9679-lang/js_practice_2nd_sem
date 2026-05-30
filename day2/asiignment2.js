class Vehicle{
    constructor(){
        this.brand = brand;
        this.speed =speed;
    }
    drive(){
        console.log(`${this.brand} is driving at speed ${this.speed}`)
    }
}
drive()

class Bike extends Vehicle{
    constructor(brand,speed,type){
        super(brand,speed);
        this.type = type;
    }
    drive(){
        console.log(`${this.type} bike:${this.brand}`)
    }
}

class Student {
  constructor(name, marks) {
    this.name  = name;
    this.marks = marks;  // task 7
  }
  study() {
    console.log(`${this.name} is studying.`);
    console.log(`Marks: ${this.marks}`);
  }
}

class Programmer extends Student {
  constructor(name, marks, lang) {
    super(name, marks); // calls Student()
    this.lang = lang;
  }
  code() {
    super.study(); // calls parent method
    console.log(
      `${this.name} codes in ${this.lang}`
    );
  }
}