const num = Math.round(Math.random() * 100);
// to generater a random number we use Math.random()
// if you want the random numbers to start at a certain value we do 10 + Math.round(Math.random() * 100);
// in this case it generates a number between 10 and 100

console.log(num);

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// math.Random generates a number betweeen 0 and 1
// in this function we multiply that number by the diference of max and min and we add min to it to make sure
// we can still get the min value so for example if Math.random generates 0. 01 we multiply that by 10
// it gives us 0.1, we then add the min or in this case 10 and we get 10.1 which gets rounded down to 10
console.log(randomNum(10, 20));
