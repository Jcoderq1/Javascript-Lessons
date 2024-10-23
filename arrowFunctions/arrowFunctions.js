const func = (x, y) => ({ x: x, y: y });

func(10, 7);
// benefits of arrow function vs regular functions
// in arrow functions you can return a value without writing return so long as its after the arrow and there are
// no curly braces { }
// const func = (x, y) => x + y;
// you can insert objects into arrow functions by using the syntax const func = (x, y) => ({ x: x, y: y });
// when we put parentheses after an arrow functions arrow this indicates that we want to return whatever
// is insider the parentheses

const getName = () => {
  return this.firstName + " " + this.lastName;
};

const person = {
  firstName: "Juan",
  lastName: "Coderque",
  getName: getName,
};

const personName = person.getName();

console.log(personName);
// this is an example of a normal function
// in this case the this keyword is able to access out object properties because the obect is where it is beign
// called from

// the diference is that the arrow function has "this" keyword always bound to where this function was defined
// not where it was called from like a regular function so insted of getting Juan Coderque we get undefined twice
