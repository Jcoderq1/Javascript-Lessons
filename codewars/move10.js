function moveTen(string) {
  function wrapAroundIndex(str, index) {
    return index % str.length;
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] == string[i] && [j + 10] < alphabet.length) {
        newString += alphabet[j + 10];
      } else if (alphabet[j] == string[i] && [j + 10] >= alphabet.length) {
        let newIndex = wrapAroundIndex(alphabet, [j + 10]);
        newString += alphabet[newIndex];
      }
    }
  }
  return newString;
}

moveTen("crolexlxfsrlsombjhcq");

function wrapAroundIndex(str, index) {
  return index % str.length;
}
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newstr = wrapAroundIndex(alphabet, 27);
console.log(alphabet[newstr]);
//
// function wrapAroundIndex(str, index) {
//   return index % str.length;
// }
// let str = "hello";
// let newIndex = wrapAroundIndex(str, 11);
// console.log(str[newIndex]);
