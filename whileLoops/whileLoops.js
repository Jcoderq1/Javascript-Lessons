// let number = Number(prompt("enter a number between 1 and 10: "));
// // while loops are good when youre not sure how many loops its gonna take to get valid input from user
// while (!(number <= 10 && number >= 1)) {
//   number = Number(prompt("enter a number between 1 and 10: "));
// }

// another way to write this so that we dont write the prompt twice

let number;

do {
  number = Number(prompt("enter a number between 1 and 10: "));
} while (!(number >= 1 && number <= 10));

// break gets out of the loop the moment the condition is met.
while (true) {
  const number = Number(prompt("enter a number between 1 and 10: "));
  if (number >= 1 && number <= 10) break;
}
