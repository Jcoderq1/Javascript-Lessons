/*
The goal of this exercise is to convert a string to a new string where each character in the 
new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
  const characters = new Set();
  let newArray = [];
  for (char of word) {
    newArray.push(char);
    for (i of newArray) {
    }
  }
}

duplicateEncode("helloll");

const encode = (word) =>
  [...word]
    .map((c1, i1, a) => (a.some((c2, i2) => c1 == c2 && i1 != i2) ? "x" : "1"))
    .join("");

console.log(encode("din"));
console.log(encode("recede"));
