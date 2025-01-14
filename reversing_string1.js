// reversing a string using for loop
let str = "abhay";
let new_str = " ";
for(let i=str.length-1; i>=0; i--){
    new_str = new_str + str[i];
}
console.log(new_str);