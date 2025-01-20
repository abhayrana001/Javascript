// Beginner Task:
// Task 1:
// Given an array numbers = [10, 20, 30, 40, 50, 60], use the slice() method to create a new array that contains the first 3 elements.
// Expected Output: [10, 20, 30]

const numbers = [10, 20, 30, 40, 50, 60];
const firstThree = numbers.slice(0, 3);
console.log(firstThree);  

// Task 2:
// Given an array names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'], use the slice() method to create a new array that contains elements from index 2 to the end (non-inclusive).
// Expected Output: ['Charlie', 'Dave', 'Eve', 'Frank']

const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];
const fromIndex = names.slice(2);
console.log(fromIndex);  // Output: ['Charlie', 'Dave', 'Eve', 'Frank']
