// Task:
// You have an array colors = ['red', 'blue', 'green', 'yellow', 'purple']. Use splice() to remove the third element ('green') from the array.
// Expected Output: The modified array should be ['red', 'blue', 'yellow', 'purple'].

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
colors.splice(2, 1); // Start at index 2, remove 1 element
console.log(colors); // Output: ['red', 'blue', 'yellow', 'purple']



const fruits_ex2 = ["Banana", "Orange", "Apple", "Mango"];
fruits_ex2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits_ex2)

// Task:
// You have an array numbers = [10, 20, 30, 40, 50, 60, 70]. Use splice() to remove every second element starting from index 1 (20, 40, 60).
// Expected Output: The modified array should be [10, 30, 50, 70].
// const numbers = [10, 20, 30, 40, 50, 60, 70];

// Start from the second element (index 1) and remove every second element
for (let i = 1; i < numbers.length; i += 1) {
  numbers.splice(i, 1);
}
console.log(numbers); // Output: [10, 30, 50, 70]
