// Task:
// You have an array colors = ['red', 'blue', 'green', 'yellow', 'purple']. Use splice() to remove the third element ('green') from the array.
// Expected Output: The modified array should be ['red', 'blue', 'yellow', 'purple'].

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
colors.splice(2, 1); // Start at index 2, remove 1 element
console.log(colors); // Output: ['red', 'blue', 'yellow', 'purple']

// Task:
// You have an array fruits = ['apple', 'banana', 'cherry', 'date', 'fig']. Use splice() to remove 'cherry' and 'date', and replace them with 'grape' and 'kiwi'.
// Expected Output: The modified array should be ['apple', 'banana', 'grape', 'kiwi', 'fig'].

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
fruits.splice(2, 2, 'grape', 'kiwi'); // Start at index 2, remove 2 elements, add 'grape' and 'kiwi'
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'fig']


// Task:
// You have an array numbers = [10, 20, 30, 40, 50, 60, 70]. Use splice() to remove every second element starting from index 1 (20, 40, 60).
// Expected Output: The modified array should be [10, 30, 50, 70].
// const numbers = [10, 20, 30, 40, 50, 60, 70];

// Start from the second element (index 1) and remove every second element
for (let i = 1; i < numbers.length; i += 1) {
  numbers.splice(i, 1);
}
console.log(numbers); // Output: [10, 30, 50, 70]
