//Map is  hod function.
//syntax arr.map((element, index, arr)) =>
// let arr = [1, 2, 5, 9, 10];
// arr.map((elem, index, arr) => {
//     console.log(elem, index, arr);
    
// })

// In JavaScript, map() is a built-in Array method that lets you create a new array by applying a function to each element of the original array.

// Key Points

// It does not change the original array.

// It returns a new array with the transformed values.

// You give it a callback function that tells how to transform each element.

// element → the current item in the array

// index (optional) → position of the item

// array (optional) → the original array


// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers);

// const words = ["apple", "orange", "mango"];
// const uppercasedWords = words.map(word => word.toUpperCase());
// console.log(uppercasedWords); // ["APPLE", "ORANGE", "MANGO"]
// console.log(words); // ["apple", "orange", "mango"]

// const nums = [5, 10, 15];
// //Use map() to divide each number by 5.
// const dividedByFive = nums.map(num => num / 5);
// console.log(dividedByFive);
// // Output: [1, 2, 3]    
// console.log(nums); // Output: [5, 10, 15]
// // Output: [1, 2, 3]
// // Output: [5, 10, 15]

// Use map() to convert each number into a string like "Number: X".
// For example, the first item should become "Number: 1".
// Expected result: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// const numbers = [1, 2, 3, 4, 5];
// const stringifiedNumbers = numbers.map(num => `Number: ${num}`);
// console.log(stringifiedNumbers);


// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 22 },
//   { name: "Hamid", age: 18 }
// ];
// Use map() to get an array of only names.
// Expected: ["Ali", "Sara", "Hamid"]
// const names = users.map(user => user.name);
// console.log(names);


// const numbers = [2, 4, 6, 8];
// //Use map() to create a new array where each number is plus 1.
// //Expected result: [3, 5, 7, 9]
// const incrementedNumbers = numbers.map(num => num + 1);
// console.log(incrementedNumbers);
