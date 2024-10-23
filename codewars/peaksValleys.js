function peakAndValley(arr) {
  testArray = [];
  for (let i = 3; i < arr.length; i++) {
    if (
      arr[i] > arr[i - 1] &&
      arr[i] > arr[i - 2] &&
      arr[i] > arr[i - 3] &&
      arr[i] > arr[i + 1] &&
      arr[i] > arr[i + 2] &&
      arr[i] > arr[i + 3]
    ) {
      testArray.push(arr[i]);
    } else if (
      arr[i] < arr[i - 1] &&
      arr[i] < arr[i - 2] &&
      arr[i] < arr[i - 3] &&
      arr[i] < arr[i + 1] &&
      arr[i] < arr[i + 2] &&
      arr[i] < arr[i + 3]
    ) {
      testArray.push(arr[i]);
    }
  }
  return testArray;
}

peakAndValley([45, 94, 41, 76, 29, 96, 28, 13, 84, 69, 25]);
