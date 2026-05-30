console.log("hello this is my first js code")
//variables : var, let, const
//dybamically typed data type
//var : global scope and function scope
var a = "hello";
console.log(a)
a = 10;
console.log(a)
//let and const : block scope
let b =true;
console.log(b)
const c = 14.675;
console.log(c)

//function scope example
function add(a,b){
    var x = 100;
    console.log("x:",x)
    return a+b
}
//console.log ("outside function:",x)  //shows error
let res = add(3,4)
console.log("result:",res)

//arrow function (better)
let multiply = (a,b,c)=>{
    console.log("multiply res:",a*b*c)
    //block scope example
    if(true){
        console.log("inside if")
        var y = "welcome"
        let z = "home"   ///shows error since let is used
    }
    console.log("y=",y)
    //console.log("z=",z)
}
multiply(34,23,12)

let myMessage = "Always be Discipline"
let name = "Ram Bahadur"
//traditional way of appending data

let fullMessage = "My message" + myMessage +"" +name
console.log(fullMessage)

//using template literals
//symbol `${}`
let fullMessageUsingTL = `MyMessage = ${myMessage} ${name.toUpperCase()}`
console.log(fullMessageUsingTL)

//default parameter example
let calculate = (x,y)=>{
    return x/y
}
let calculateRes = calculate(23,4)
console.log("calculate result = ",calculateRes)
let res2 = calculate(45,23)
console.log("res2: ",res2)