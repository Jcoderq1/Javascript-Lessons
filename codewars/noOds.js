function noOdds(values) {
  even = [];
  for (const num of values) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}

noOdds([1, 2, 3, 4, 5, 6]);
