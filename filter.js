//In JavaScript, filter() is an Array method that creates a new array containing only the elements that match a condition.
// Key Points
// It does not change the original array.
// It returns a new array.
// You provide a condition (true/false test).
// Only elements that pass the test are kept.

// syntax array.filter(function(element, index, array) {
//   return condition;
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4, 6]

// const ages = [12, 18, 25, 15, 30];
// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 25, 30]


const students = [
  { name: "Ali", age: 19 },
  { name: "Sara", age: 22 },
  { name: "Hamid", age: 16 }
];
const adultStudents = students.filter(student => student.age >= 18);
console.log(adultStudents);
// [
//   { name: "Ali", age: 19 },
//   { name: "Sara", age: 22 }
// ]
