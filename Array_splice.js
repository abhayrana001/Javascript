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