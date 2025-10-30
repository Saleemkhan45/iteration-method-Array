//ForEach orEach() is an Array method that lets you run a function on each element of the array — but it does not return a new array.
// Key Idea
// forEach() is used when you want to do something with each item (like print, calculate, store, etc.)
// It does not create or return a new array.
// It does not change the original array unless you change items directly.

// const numbers = [1, 2, 3, 4];

// numbers.forEach(num => {
//   console.log(num);
// });
// // Output:
// 1
// 2
// 3
// 4

// const fruits = ["apple", "orange", "mango"];

// fruits.forEach((fruit, i) => {
//   console.log(i, fruit);
// });
// Output:
// 0 apple
// 1 orange
// 2 mango

// Example: Using forEach to calculate the sum of an array
// let sum = 0;
// const values = [10, 20, 30];    
// values.forEach(value => {
//     sum += value;
// });
// console.log(sum); // Output: 60

// const fruits = ["apple", "banana", "mango"];

// fruits.forEach(fruit => {
//   console.log(`Fruit: ${fruit}`);
// });


// const numbers = [2, 4, 6, 8, 10];

// let sum = 0;

// numbers.forEach(num => {
//   sum += num; // same as sum = sum + num
// });

// console.log(sum); // 30



// const students = [
//   {name: "Ali", age: 19},
//   {name: "Sara", age: 22},
//   {name: "Hamid", age: 18}
// ];

// students.forEach(student => {
//   console.log(`${student.name} is ${student.age} years old`);
// });


// const words = ["hello", "javascript", "world"];

// let totalLetters = 0;

// words.forEach(word => {
//   totalLetters += word.length;
// });

// console.log(totalLetters); // 20



// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Keyboard", price: 50 }
// ];

// const priceTags = products.map(product => {
//   return `Product ${product.name} costs $${product.price}`;
// });

// console.log(priceTags);


// const ages = [12, 18, 25, 10, 30];

// ages.forEach(age => {
//   if (age >= 18) {
//     console.log(age);
//   }
// });

//output
// 18
// 25
// 30

// const numbers = [10, 20, 30, 40];

// const divided = numbers.map(num => num / 10);

// console.log(divided); //[1, 2, 3, 4]



// const orders = [
//   { item: "Burger", price: 300 },
//   { item: "Fries", price: 150 },
//   { item: "Drink", price: 100 }
// ];

// let total = 0;

// orders.forEach(order => {
//   total += order.price;
// });

// console.log("Total:", total);
//output Total: 550





