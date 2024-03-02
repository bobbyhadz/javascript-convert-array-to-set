// EXAMPLE 1 - Convert an Array to Set in JavaScript

// ✅ Convert an Array to a Set

const arr = ['a', 'a', 'b', 'c', 'c'];

// 👇️ {'a', 'b', 'c'}
const set = new Set(arr);

console.log(set.size); // 👉️ 3
console.log(set.has('c')); // 👉️ true

// // ------------------------------------------

// // ✅ Convert an Array of Objects to a Set

// const arr2 = [
//   {id: 1, letter: 'a'},
//   {id: 2, letter: 'b'},
//   {id: 3, letter: 'c'},
// ];

// const set2 = new Set(arr2.map(obj => obj.letter));

// // 👇️ Set(3) { 'a', 'b', 'c' }
// console.log(set2);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Array of Objects to a Set

// const arr = [
//   {id: 1, letter: 'a'},
//   {id: 2, letter: 'b'},
//   {id: 3, letter: 'c'},
// ];

// const set = new Set(arr.map(obj => obj.letter));

// // 👇️ Set(3) { 'a', 'b', 'c' }
// console.log(set);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Array to a Set using Array.forEach()

// const arr = ['a', 'a', 'b', 'c', 'c'];

// const set = new Set();

// arr.forEach(element => {
//   set.add(element);
// });

// // 👇️ Set(3) { 'a', 'b', 'c' }
// console.log(set);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Array to a Set using Array.reduce()

// const arr = ['a', 'a', 'b', 'c', 'c'];

// const set = arr.reduce((accumulator, current) => {
//   accumulator.add(current);

//   return accumulator;
// }, new Set());

// // 👇️ Set(3) { 'a', 'b', 'c' }
// console.log(set);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Add Array of Values to an Existing Set using spread syntax (...)

// const set1 = new Set();
// const arr = ['bobby', 'hadz', 'com'];

// const newSet = new Set([...set1, ...arr]);
// console.log(newSet); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Add an Array of Values to an Existing Set using a `for...of` loop

// const set1 = new Set();
// const arr = ['bobby', 'hadz', 'com'];

// for (const element of arr) {
//   set1.add(element);
// }

// console.log(set1); // 👉️ Set(3) { 'bobby', 'hadz', 'com' }
