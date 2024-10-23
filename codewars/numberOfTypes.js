function solve(s) {
  let arr = [];
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let uCount = 0;
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let lCount = 0;
  let specialChars = "`~',!@#$%^&*()-_=+\\|[]{};:/?.<>\"";
  let sCount = 0;
  let numbers = "0123456789";
  let nCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (upperCase.includes(s[i])) {
      uCount++;
    } else if (lowerCase.includes(s[i])) {
      lCount++;
    } else if (specialChars.includes(s[i])) {
      sCount++;
    } else if (numbers.includes(s[i])) {
      nCount++;
    }
  }
  arr.push(uCount, lCount, nCount, sCount);
  console.log(arr);
}

solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD");
// ${uCount},${lCount},${nCount},${sCount}
