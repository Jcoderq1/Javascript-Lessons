function vaporcode(sentence) {
  const newArray = [];
  for (const char of sentence) {
    if (char === " ") {
      continue;
    } else {
      newArray.push(char);
    }
  }
  return newArray.join("  ").toUpperCase();
}
vaporWave("hello my name is tom");
