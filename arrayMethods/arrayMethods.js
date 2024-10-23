const arr = [1, 2, 3, 47, 14, 6];
const arr2 = [7, 9, 8];
const arr3 = arr.concat(arr2);

const stringArr = arr.toString();
console.log(stringArr, arr);
arr.shift();
// .shift() removes the first elemt inside an array
arr.unshift(-1);
// .unshift adds something to the begining of an array
console.log(arr);
const sortedArray = arr3.sort((a, b) => a - b);
// arr. sort organizes the array by either decending or acending order what changes it is wether
// the sort funtion is a - b or b - a, a - b sorts from least to greatest and vice versa
console.log(sortedArray);
// concat funtion adds something to the end for example you could join teo arrays
arr.splice(0, 1);
// splice removes elements inside array by inputting index starting position and how many elements
console.log(arr);
const str = arr.join(" | ");
console.log(str);
// converts elements of an array to a string and seperates them by the defined
// character, in this case |
const sl = arr.slice(0, 2);
// slice returns a portion of the original array the main difference between splice and slice is that the second index in slice is not inclusive
console.log(sl);
