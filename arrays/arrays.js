const arr = [10];
// arrays are created with square brackets and
//they can have different types of values such as numbers, strings, bolean etc...
arr[arr.length - 1] = 2;
console.log(arr);
// when you want to update the last element of an array do arr[arr.length - 1] = 10;
// this gets the length of the array and subtracts 1 from it in order to modify the last value
const arr2 = new Array(10, 20, 30);
console.log(arr2);
// the new Array function can create arrays so long as there is more than one number
// new Array(10); would create an array with 10 empty items the only way this wouldnt happen is if it was a string
// so new Array("10"); would create an array with '10'
// arrays are useful because they can change their size like if we wanted the user to be able to make a todo list

//putting and removing items from existing array

const arr3 = [];

const name1 = prompt("What is your name?");

const age = prompt("What is your age?");

const hairColor = prompt("What is your hair color?");
if (name1 !== "") arr3.push(name1);
if (age !== "") arr3.push(age);
if (hairColor !== "") arr3.push(hairColor);
const del = prompt("would you like to delete the last element?");

if (del === "yes") {
  arr3.pop();
}
alert(arr3);
const text = document.getElementById("array");
text.innerHTML = arr3;
