const str = "hello world my name is Juan";
const str2 = str.replaceAll("l", "1");
// . replace replaces frist innstance for another character, replaceAll replaces all instances for said character
console.log(str2);

// .trim trims spaces form beggining and end of string
const arr = str.split(" ");
// .split creates an array and seperates strings of words by the delimiter, in this case its spaces, but it could
// also be , | letters etc...
console.log(arr);
