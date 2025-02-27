function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(`6th number of series is`,fibonacci(6)); // 8
  