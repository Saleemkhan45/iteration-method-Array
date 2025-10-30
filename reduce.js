// reduce() is a JavaScript array method used to combine all elements of an array into a single value.
// That value could be:
// A number (like sum)
// A string
// An object
// Or even another array
// Key Idea
// reduce() takes each element of the array and reduces them into one final result.
// Syntax
// array.reduce((accumulator, currentValue) => {
//   return newValue;
// }, initialValue);

// const numbers = [1, 2, 3, 4];
// const total = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);
// console.log(total); // 10


// const numbers = [2, 3, 4];
// const result = numbers.reduce((product, num) => product * num, 1);
// console.log(result); // 24

// const numbers = [5, 10, 15, 20];
// const total = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);
// console.log(total); // 50

// const nums = [2, 3, 5];
// const result = nums.reduce((product, num) => {
//   return product * num;
// }, 1);
// console.log(result); // 30

// Explanation (Very Simple)
// Step	product (accumulator)	num (current value)	New product
// Start	1	-	Start with 1 because multiplying starts from 1
// Loop 1	1 × 2	→ num = 2	product = 2
// Loop 2	2 × 3	→ num = 3	product = 6
// Loop 3	6 × 5	→ num = 5	product = 30

// const cart = [
//   { item: "Burger", price: 300 },
//   { item: "Fries", price: 150 },
//   { item: "Drink", price: 100 }
// ];
// const total = cart.reduce((sum, product) => {
//   return sum + product.price;
// }, 0);
// console.log(total); // 550


const words = ["hello", "javascript", "world"];
const totalLetters = words.reduce((sum, word) => {
  return sum + word.length;
}, 0);
console.log(totalLetters); // 20
