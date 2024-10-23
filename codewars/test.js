arr = [1, 2, 2];
// function squareSum(numbers) {
//   squaredValues = [];
//   let sum;
//   for (const num of numbers) {
//     let sq = num ** 2;

//     squaredValues.push(sq);
//     sum = squaredValues.reduce((prev, current) => prev + current);
//   }
//   console.log(sum);
// }
// squareSum(arr);

function squareSum(numbers) {
  result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] ** 2;
  }
  return result;
}
squareSum(arr);
