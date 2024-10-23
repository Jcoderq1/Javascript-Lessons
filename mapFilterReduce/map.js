const arr = [1, 2, 3, 4, 5, 6];
// map functions do whats known as a callback function, which accepts a parameter and returns a value
const squares = arr.map((x) => x ** 2);
// what we are doing here is essentially mapping each value inside our array to this function
// we pass each individual value to the parameter x
console.log(squares); // output [ 1, 4, 9, 16, 25, 36 ]

// example if writing the map function on our own

function map(arr, func) {
  const newArr = [];

  for (const value of arr) {
    const newValue = func(value);
    newArr.push(newValue);
  }
  return newArr;
}

const result = map(arr, (x) => x ** 2);
console.log(result);
