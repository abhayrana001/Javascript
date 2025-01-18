// Task: Create two promises that resolve with values, and chain them together to log the combined result.
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
});
let p2 =(val)=> new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(`${val} World`);
    }, 1000);
});

p1
.then((result1)=>{
    return p2(result1);
})
.then((result2)=>{
    console.log(` ${result2}`);
})
.catch((error)=>console.log("error"));