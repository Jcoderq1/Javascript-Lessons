function countDown(n) {
  newArray = [];

  for (let i = n; i >= 1; i--) {
    newArray.push(i);
  }
  console.log(newArray);
}
countDown(10);
