// Task: Extract the first 5 characters from the string "Hello, World!".
const str = "Hello, World!";
const slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: "Hello"

// Task: Given the string "JavaScript is awesome!", extract only the word "awesome" using slice().
const text = "JavaScript is awesome!";
const slicedText = text.slice(14, 21);  // "awesome" starts at index 15 and ends at 21 (22 is excluded)
console.log(slicedText); // Output: "awesome"

// Advanced Task:
// Task: Write a function getLastNChars(str, n) that extracts the last n characters from a string using slice().
// Call the function with "Programming" and 4 as arguments.
function getLastNChars(str, n) {
    return str.slice(-n); // Negative index extracts from the end
  }
  
  const result = getLastNChars("Programming", 4);
  console.log(result); // Output: "ming"
  
