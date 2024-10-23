/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
*/

function getDivisorsCnt(n) {
  const divisors = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  console.log(divisors.length);
}

getDivisorsCnt(20);
