// Beginner Task:
// Task:
// Generate a random number between 0 and 10 (inclusive).

// Hint: Use Math.random() and scale it up to the desired range.
const randomNumber = Math.floor(Math.random() * 11); // 0 to 10 (inclusive)
console.log(randomNumber);

// Intermediate Task:
// Task:
// Write a function getRandomInRange(min, max) 
// that generates a random number between two numbers (inclusive). Call the function with min = 5 and max = 15.
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const result = getRandomInRange(5, 15);
  console.log(result);
  