// another way to loop through an array is using the for of method

const strs = ["one", "two", "three"];

for (const str of strs) {
  console.log(str);
}

// if ypu want to get the index and the elelement for (const [i, str] of strs.entries()) - i stands for index
// and when you console.log this it will show each element with its respective index

const strs2 = ["one", "two", "three"];

for (const [i, str2] of strs2.entries()) {
  console.log(i, str2);
}

const matrix = [];
// create an empty array
// for (let i = 0; i < 3; i++) {
//   const numbers = [];
//   // loops three times to create 3 seperate containers that we will put into matric container
//   for (let j = i * 3; j < i * 3 + 3; j++) {
//     numbers.push(j + 1);
//   }
//   // populates each container with 3 elements 1 - 3, 4 - 5, 6 - 9

//   matrix.push(numbers);
// }
// console.log(matrix);
// gives us final result of [ [1,2,3] [4,5,6] [7,8,9] ]

for (let i = 0; i < 2; i++) {
  const arr = [];

  for (let j = 0; j < 3; j++) {
    const numers = [];

    const start = i * 6 + j * 2 + 1;
    for (let k = start; k < start + 2; k++) {
      numers.push(k);
    }

    arr.push(numers);
  }

  matrix.push(arr);
}
console.log(matrix);
