// 2. filter()
// Purpose: Creates a new array with elements that pass a test (provided as a callback function).
// When to use: When you want to filter elements based on a condition.

// filter out the odd numbers from the Array

const arr =[1,2,3,4,5,6,7,8,9,10]
const oddnum = arr.filter(num=>num%2 !==0);
console.log(oddnum);

// filter the user acc to the age
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
  ];
  const adults = users.filter(user => user.age >= 21);
  console.log(adults);