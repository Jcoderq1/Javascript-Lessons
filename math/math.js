const num = 2.55;
const roundedNum = Math.round(num * 10) / 10;
console.log(roundedNum);
// Math.round rounds to the nearest number, if you want to round to the nearest decimal you have to multiple by
// 10 and the devide by 10 Math.round(num * 10) / 10;
// if you want to round to the nearest 100 or 1000 then you multiply and devide by that amount

// if you want to round down you do Math.floor and to round up you do Math.ceil
const roundDown = Math.floor(num);
const roundUp = Math.ceil(num);

console.log(roundDown, roundUp);

// to find max or minimum values

const x = 10;
const y = 20;

max = Math.max(x, y);
min = Math.min(x, y);
console.log(`max value is ${max} min value is ${min}`);

// if dealing with arrays make sure to use the spread operator ... to use Math on arrays

arr = [1, 2, 3, 4, 5];

maximum = Math.max(...arr);
console.log(maximum);

// absolute value is Math.abs

const abs = Math.abs(-9); // logs positive 9
console.log(abs);

// for the number infinity write Infinity with an uppercase I
const inf = Infinity;
console.log(inf);
