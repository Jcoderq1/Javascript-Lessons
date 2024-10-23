// maps allow us to associate a key with a value
// maps are flexible data structures
const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
console.log(m);
// to access specific value in a map
console.log(m.get("a"));
// m.has checks if you have the key not the value
console.log(m.has("a"));
// const str = "hello world my name is Juan";
// const freq = [];
// for (const char of str) {
//   let found = false;
//   for (const [idx, pair] of freq) {
//     const [key, value] = pair;
//     if (key === char) {
//       freq[idx] = [char, value + 1];
//       found = true;
//       break;
//     }
//   }
//   if (!found) freq.push([char, 1]);
// }

const str = "hello world my name is Juan";
const freq = new Map();

for (const char of str) {
  if (freq.has(char)) {
    freq.set(char, freq.get(char) + 1);
  } else {
    freq.set(char, 1);
  }
}
console.log(freq);
