// example of global scope since x is outside of any funtion it is accesible using the global scope
// x = 2;
// function aaccessX() {
//   x = 4;
// }

// accessX();
// console.log(x);

// in this case x is inside a function so when we try to console.log(x); we get x is not defined
// however if you put a function inside another function the second function would have access to x
function accessX() {
  let x = 4;

  function test() {
    console.log(x);
  }

  test();
}
accessX();
// in this case the output is 4, however if we put test(); outside of the function we get undefined because the
// scope of test() is the function its defined in

function test(x) {
  if (x === 3) {
    var val = 5;
  } else if (x === 4) {
    var val = 6;
  } else {
    var val = 0;
  }
  console.log(val);
}

test(3);
// in this case we get ar error of val is not defined because the let val is only defined in the if statement
// not the function text() essentially it is in the scope of if, to fix this we would use var instead of let
// var defines a variable in the most outerscope or current function of where it is defined so with var
// the function test will have acces to val
// let/ const is in the current block vs var which is in the current function
// however if we had a function inside a function and we use var on the most inside function, we could only access
// that var value within its direct function not the outer function
function test(x) {
  function test2(x) {
    if (x === 3) {
      var val = 5;
    } else if (x === 4) {
      var val = 6;
    } else {
      var val = 0;
    }
    console.log(val);
  }
  test2();
  //   console.log(val);
}
test(3);
// however if we had a function inside a function and we use var on the most inside function, we could only access
// that var value within its direct function not the outer function

const y = 5;

function test3(y) {
  if (y === 3) {
    console.log("one");
  } else if (y === 4) {
    console.log("two");
  } else {
    console.log("three");
  }
}

test3(3);
// in this instance y is going to look for the closest defined y to use as the value for the function
// so if we have a parameter of y the when we call the function y will be what we set it to test3(3)
// if we dont set a parameter, the function or y will look for the closest defined y in this case
// defaulting to y = 5
