//promise that resolves
let promise = new Promise(
    (resolve,reject)=>{
        let p =false
        if(p){
            resolve("Sucess! Data loaded.")
        }else{
            reject("SOmething went wrong!")
        }
    }
)
let handlePromise=()=>{
    promise.then(
        (data)=>{
            console.log("sucess:",data)
        }
    ).catch(
        (e)=>{
            console.log("error:",e)
        }
    ).finally(
        ()=>{
            console.log("finally function called")
        }
    )
}
handlePromise()