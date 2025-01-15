// Promise is used for handling asynchronous operations like api calls, file loading, etc. 
// it have three states :
// 1 fulfilled
// 2 rejected
// 3 pending
// example of Promise to check if a number is even.

let checkeven = new Promise((resolve, reject)=>{
    let num = 8;
    if(num%2==0){
        resolve("The number is even")
    }
    else{
        reject("The number is odd")
    }
});
checkeven
.then((message)=>console.log(message))
.catch((error)=>console.log(error))
