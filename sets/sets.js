// for operations having to do with ading removing or checking if something exists sets are faster than arrays
const s = new Set([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4]);
s.add(-1);
s.delete(4);
console.log(s);
// sets hold unique elements and you will never have duplicate elements inside of a set
// we don't have index access for sets like arrays
// To loop through a set do the following

for (const number of s) {
  console.log(number);
}
// s.has returns a Boolean of weather the set contains something so s.has(1); would return true

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 41];
const numbers = new Set();

for (const value of arr) {
  if (numbers.has(value)) {
    console.log("found duplicate of", value);
  }
  numbers.add(value);
}
// for (const [idx, value] of arr.entries()) {
//   for (const value2 of arr.slice(idx + 1)) {
//     if (value === value2) {
//       console.log("found duplicate of", value);
//       break;
//     }
//   }
// }
