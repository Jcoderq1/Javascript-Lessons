const person = {
  name: "Juan",
  lastName: "Coderque",
  // when we create a function inside of an object the property name becomes the function name that why we
  // dont have to name the function
  getName: function () {
    console.log(this.name + this.lastName);
  },
};
// notice how we called the function by the property name of getName inside of the object person
person.getName();

// explaining function references

function test() {
  console.log("test");
}
// when we write just the name of the function without the parantheses we are not calling the funtion but
// referencing the function so in this case we are letting v = to the reference of test
// so if we call v() we care calling the reference of test and it works as though we called test()

const v = test;
v();

function test2() {
  console.log(this);
}

test2();
// when we run this function it is accesing the global object it is not accesing the properties of this function
