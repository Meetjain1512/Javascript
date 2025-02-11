const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}`);
  
    readline.question("Enter your age: ", (age) => {
      console.log(`You are ${age} years old.`);
      readline.close();
    });
  });
  