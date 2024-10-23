const arr = [1, 2, 3, 4, 5, 6];
const fileredArr = arr.filter((value) => value % 2 == 0);
console.log(fileredArr);
// this will filter all the values inside the array that return true so
// any value that is % 2 == 0  will ve returned to the filteredArr

// making the filtered function from scratch

function filter(arr, func) {
  const newArr = [];

  for (const value of arr) {
    if (func(value)) {
      newArr.push(value);
    }
  }
  return newArr;
}

const result = filter(arr, (x) => x % 2 == 0);
console.log(result);
