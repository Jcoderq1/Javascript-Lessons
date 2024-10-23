const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((prev, current) => prev + current);
console.log(sum);

function reduce(arr, func) {
  let currentResult = 0;

  for (const num of arr) {
    currentResult = func(currentResult, num);
  }
  return currentResult;
}

const result = reduce(arr, (prev, next) => prev - next);
console.log(result);
