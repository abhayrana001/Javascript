// The splice() method can be used to add new items to an array:
const fruits_ex1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_ex1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits_ex1)

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted item
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
