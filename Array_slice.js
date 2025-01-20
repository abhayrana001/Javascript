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
console.log(fromIndex);  

// Advanced Task:
// Task:
// Given an array data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'], use the slice() method to create a new array that skips every second element starting from the third element (i.e., extract elements at indices 2, 4, 6).

const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
const everySecondElement = data.slice(2).filter((_,index)=>index%2 === 0);
console.log(everySecondElement);

