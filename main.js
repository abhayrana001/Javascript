// 1. map()
// Purpose: Creates a new array by applying a function to each element in the original array.
// When to use: When you want to transform each element of an array.

// example : double each element of the given array

const arr=[1,2,3,4,5]
const double_arr = arr.map(num=>num*2);
console.log(double_arr);

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  const names = users.map(user => user.name);
  console.log(names); 