// reversing a string using for loop
let str = "react";
let new_str = "";
for(let i=str.length-1; i>=0; i--){
    new_str = new_str + str[i];
}
console.log(new_str);

// reversing a string using inbuilt methods
let n = "javascript";
let result = n.split("").reverse().join("");
console.log(result);