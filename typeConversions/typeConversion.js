const x = "5.6";
const y = 10;
const result = parseInt(x) + y;
// this conatts the two values and the output is 510 becuase we are a string to a number
// Number(x) converts string to number/ parseInt(x) also works the same but it rounds down to the nearest integer
// .toString() does the opposite and converts number to string
// parseFloat(x); this includes the decimals
console.log(result);

const name1 = "Juan";
const age = 28;
const sentence = "Hi my name is " + name1 + " and I am " + age + " Years Old";
console.log(sentence);
