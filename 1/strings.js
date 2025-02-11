const name = "Hello"
const name2 = " user"
const age = 32
console.log( name + name2 + "!" );

console.log(`Hello ${name2}! your age is ${age}`); // template literals
const name3 = new String("Hello-worlds")
console.log(name3[3]);
console.log(name3.length);
console.log(name3.charAt(1));
console.log(name3.indexOf("e"));
console.log(name3.toUpperCase());
console.log(name3.toLowerCase());

const str = name3.substring(0,4) //so the output of this will be hell as it take index 0,1,2
console.log(str);
const str2 = name3.slice(-8)
console.log(str2);
const newstring = "      Harry     "
console.log(newstring.trim()); // it will remove the white spaces from the string
console.log(name3.replace("Hello","Hi"));
console.log(name3.split("-")); // it will split the string into array
console.log(name3.includes("Hello")); // it will return true or false