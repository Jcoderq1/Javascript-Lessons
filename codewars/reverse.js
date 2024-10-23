function reverseWords(str) {
  newArray = str;
  strArr = newArray.split(" ");
  const reversedArr = strArr.reverse();
  revString = reversedArr.join(" ");
  return revString;
}

reverseWords("hello world!");
