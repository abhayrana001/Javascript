// Task: Create a Set from an array with duplicate values [1, 2, 2, 3, 4, 4, 5]. Remove duplicates and print the unique values.

// Expected Output: {1, 2, 3, 4, 5}.
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);
