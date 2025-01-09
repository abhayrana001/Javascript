// 3. reduce()
// Purpose: Reduces an array to a single value by applying a function to an accumulator and each element.
// When to use: When you want to aggregate data (sum, product, etc.).

// sum of all numbers in the Array

const arr = [1,2,3,4,5]
const sum = arr.reduce((acc,num)=>acc+num,0);
console.log(sum);


// we can also use reduce for grouping 
// if we use filter method here we can not get the whole data 

const data = [
    {name:'paul', age:25},
    {name:'mike', age:30},
    {name:'dom', age:25}
];

const groupbyage = data.reduce((acc,user)=>{
    if(!acc[user.age]){
        acc[user.age] = [];
    }
    acc[user.age].push(user);
    return acc;
},{});

console.log(groupbyage);