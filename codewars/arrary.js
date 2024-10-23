//Return an array, where the first element is the count of positives numbers and the second element is
//sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function filter(array) {
  positiveArray = [];
  negativeArray = [];
  newArray = [];
  let max;
  let sum;
  for (const num of array) {
    if (num >= 1) {
      positiveArray.push(num);
    } else {
      negativeArray.push(num);
    }
    max = Math.max(...positiveArray);
    sum = negativeArray.reduce((prev, current) => prev + current, 0);
  }
  newArray.push(max);
  newArray.push(sum);
  console.log(newArray);
}
filter(arr);
