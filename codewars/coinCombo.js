function coinCombo(cents) {
  const coins = [1, 5, 10, 25];
  let newCoins = [];
  let finalAnswer = [];
  let answer = " ";
  for (let i = 0; i < coins.length; i++) {
    cents > coins[i] ? newCoins.push(coins[i]) : finalAnswer.push(0);
  }
  answer = cents / newCoins[newCoins.length - 1];
  let LowerVal = answer - Math.trunc(answer);
  finalAnswer.push(Math.floor(answer));
  console.log(Math.ceil(LowerVal * 10) / 10);
}
coinCombo(24);
