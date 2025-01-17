// Define the promise using let
let p = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received 📦"); // Simulating data being fetched
    }, 2000); // Simulate a 2-second delay
  });
  
  // Your process function
  async function process() {
    const data1 = await p; // Wait for the promise to resolve, but no blocking!
    console.log(data1);
  
    const data2 = await p; // Wait again for the same promise
    console.log(data2);
  }
  
  console.log("Start");
  process();
  console.log("End");