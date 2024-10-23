function add(x, y) {
  console.log(x + y);
}
// we can set parameters inside of out funtion so add(x, y) {}
// to call a function we put the name of the function followed by parantheses in this case add();

// when we pass values to a function these are know as arguments so in this case 10, 8
add(10, 8);

// we can also set optional parameters in funtions by setting them equal to some default value
// in this case num=1 so even if we only set values for a1, and a2 the function still runs
function math(a1, a2, num = 1) {
  return a1 * a2 * num;
}
const result = math(10, 7, 8);
console.log(result);

// we can also return the the values of the function to whoever called the function by using the return keyword

// to return multiple values we use square brackets so
function math1(a1, a2) {
  return [a1 ** 2, a2 ** 2];
}
const [result2, result3] = math1(10, 20);

console.log(result2, result3);

/////////

function removeAllChars(arrayOfStrings, charactersToRemove) {
  const newArray = []; // construct new array
  if (charactersToRemove.length === 0) return;
  // if charactersToRemove does not contain any arguments we get undefined
  for (const str of arrayOfStrings) {
    // loop through arrayOfStrings and create newStr which is an empty string
    let newStr = "";
    for (const char of str) {
      // loop through each char of str
      if (charactersToRemove.includes(char)) {
        // if included in the second paramater of charactersToRemove, we skip that character and go to the next
        // otherwise if it is not included in characters to remove, we add that character to newStr
        continue;
      }
      newStr += char;
    }
    newArray.push(newStr);
    // we push all the values of newStr to newArray
  }
  return newArray;
  // we return the newArray to whoever called the function removeAllChars
}

const result4 = removeAllChars(
  ["hello my name is Juan and I am", "28", "I love sim racing"],
  ["h", "2", "i"]
);
console.log(result4);
