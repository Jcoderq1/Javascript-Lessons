const divBy2 = [];

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i != 0) continue;

  if (i % 2 === 0 && i != 0) divBy2.push(i);

  if (divBy2.length >= 20) break;
}
// loop and find numers divisible by 2 but not by 3
console.log(divBy2);

const numberElements = Number(prompt("Enter a number between 1 and 10"));

if (numberElements >= 1 && numberElements <= 10) {
  const list = document.getElementById("list");

  for (let i = 1; i <= numberElements; i++) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(i.toString()));
    list.appendChild(li);
  }
}
// print i as li element in Ul list depending on user input

const str = prompt("Enter a string of characters: ");
const target = "!";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char === target) {
    alert(`We found the ${target} in ${i + 1} characters`);
  }
}
// loops through string of characters and once it finds the target character it alters index of said character
