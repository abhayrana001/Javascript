// to check the given string is palindrom or not 

let s = "abcdcba";
let temp;
for(let i=0; i<s.length/2; i++){
    if(s[i]!=s[s.length-i-1]){
        temp = 1;
        console.log("not palindrom")
        break;
    }
    else
    temp = 0;
}
if(temp == 0){
    console.log("palindrom");
}