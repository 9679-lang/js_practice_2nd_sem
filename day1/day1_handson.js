//handson 1
//using rest operator
let arr = [12,35,67,43]
let calculate=(...numbers)=>{
    let res = numbers.reduce(
        (accumulator,element)=>{
            return accumulator+element
        }
    )
    console.log("sum of numbers:",res)
}
//calling function using spread opertor
calculate(...arr)

//handson 2
let cricketer={
    "name":"sachin",
    "age":56,
    "totalRuns":300
}
let cricketerEconomy = {
    salary:40000,
    country:"india",
}

//using string operator on object (key:valuepart)
let withoutspread={cricketer}
console.log("without spread:",cricketer)
let newObj={...cricketer}
console.log("after using spread operator:",newObj)

//merge cricketer and cricketerEconomy
let mergedObj = {...cricketer, ...cricketerEconomy}
console.log("merged objects:",mergedObj)

//destructive array
let[a,b,c,d]=[23,45,67,45]
console.log(`a:${a} b:${b} c:${c} d:${d}`)

//destructive object
let{age,fullname}={
    fullname:"john dae",
    age:45
}
console.log(`fullname:${fullname} age:${age}`)

//default parameters
let display =(price=1)=>{
    console.log ("price=",price)
}
display()
display(456)
