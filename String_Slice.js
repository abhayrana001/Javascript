// Task: Extract the first 5 characters from the string "Hello, World!".
const str = "Hello, World!";
const slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: "Hello"

// Task: Given the string "JavaScript is awesome!", extract only the word "awesome" using slice().
const text = "JavaScript is awesome!";
const slicedText = text.slice(14, 21);  // "awesome" starts at index 15 and ends at 21 (22 is excluded)
console.log(slicedText); // Output: "awesome"

