// Task: Given the string "apple,banana,grape,orange", split it into an array of fruits using split().

// Expected Output: ['apple', 'banana', 'grape', 'orange']

const fruits = "apple,banana,grape,orange";
const fruitArray = fruits.split(",");
console.log(fruitArray);

// Task: Given the string "Hello World! JavaScript is fun.", split it into an array of words using space as the delimiter.

// Expected Output: ['Hello', 'World!', 'JavaScript', 'is', 'fun.']
const sentence = "Hello World! JavaScript is fun.";
const wordsArray = sentence.split(" ");
console.log(wordsArray);


// Task: Write a function splitAndLimit(str, delimiter, limit) that splits a string using a given delimiter but only returns a specified number of parts.

// Call the function with "one-two-three-four-five", "-", and 3 as arguments.

// Expected Output: ['one', 'two', 'three']

function splitAndLimit(str, delimiter, limit) {
    return str.split(delimiter, limit);
  }
  
  const result = splitAndLimit("one-two-three-four-five", "-", 3);
  console.log(result);
  