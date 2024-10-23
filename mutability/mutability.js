// immutable types of data - cant change
true;
3;
("str");
undefined;
null;

// let x = 10;
// const y = x;// copy of x or 10 not reference of x
// x = 20;
// console.log(x, y);
// when i change the value of x after y is still equal to 10 and x is equal to 20
// since the number 10 is considered a immutable value it does not change everywhere like we see in this example

let x = [1, 2, 3, 4, 5]; // x -> ref -> [1,2,3,4,5]
let y = [...x]; // console.log(x,y) output is [ 100, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
x[0] = 100;
console.log(x, y);
// since x is not equal to a mutable data type an array in this case arrays are mutable so both x and y's arrays
// start with 100
// when you're storing mutbale types your are storing a reference to that type

// this is difference from when we say x = [1], in this case we are referencing a new array
// y would still be [1,2,3,4,5] while x is now referncing the array [1]

// x -> new ref -> [1]
// inorder to copy teh values and modify them without changing x we use the spread operator which creates a new
// array so if we say let y = [...x] we are creating a new array and inserting all the immutable values of x

let z = [[1], [2], [3], [4]]; // ref -> [ref -> [1], ref -> [2], ref -> [3], ref -> [4]]
let n = [...z]; // ref -> [ref -> [1], ref -> [2], ref -> [3], ref -> [4]]
// here we copy all the mutable objects into n however when we do n[0][0] we are using the original reference
// and changing what it is reffering to to [100]
//n[0] = 100;  this only affects n's array because we are changing one mutable object with another mut object
// however when you do n[0][0] = 100 this affects the reference that was copied inside n's array
n[0][0] = 100;
console.log(z, n);

// examples using functions

function modifyArray(x) {
  x[0] = 100;
}
const arr = [1, 2, 3, 4, 5];
console.log(arr); // array is still [1, 2, 3, 4, 5]
modifyArray(arr); // modifies array to [ 100, 2, 3, 4, 5 ]
console.log(arr); // logs array as [ 100, 2, 3, 4, 5 ]

// examples using objects
function modifyObj(x) {
  x.prop = "test";
}
const obj = { name: "Juan" };
console.log(obj); // obj is still { name: 'Juan' }
modifyObj(obj); // obj is now { name: 'Juan', prop: 'test' }
console.log(obj); // console logs { name: 'Juan', prop: 'test' }
