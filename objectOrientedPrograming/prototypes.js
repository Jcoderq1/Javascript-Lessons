const obj = {
  name: "Juan",
  // in this case sayHi: is a method
  // a method is any kind of function that you can call on a specific object
  sayHi: function () {
    console.log("hi");
  },
};
// every single object in javascript has whats called a prototype
// a prototype is another object that is linked to this object
// that contains some baselevel functionality that can be inherited by the object
console.log(obj.toString()); // Output [object Object]
// in this case the toString() method or function is actually implemented on the prototype of this object
// when we are looking for a property or a method inside an object, if is has that property then we use that
// property, if it doesnt have that property we actually go into what is know as the prototype chain and we look
// for that method or property

// javascript is not a object oriented language
// javascript is a prototypical language

// when you do obj. you get several propeties some of which you may have not have
// defined but that are built into Javascript

// ways to view what the prototype is
console.log(obj.__proto__); // output is [Object: null prototype] {}

// another way to access the prototype is
console.log(Object.getPrototypeOf(obj)); // output is [Object: null prototype] {}

/*
const myObject = {
  city: "Madrid",
  greet() {                                                         Object.prototype
    console.log(`Greetings from ${this.city}`); ----> __proto__---> hasOwnProperty()--->__proto__---> null
  },                                                                is PrototypeOf()
};

in this chain we first see if we can find that property, if we dont see the property we go into the prototype
of that object if we still dont see that property, we go into the prototype of the protoype and get null

*/

const obj2 = {
  name: "Juan",
  // in this case sayHi: is a method
  // a method is any kind of function that you can call on a specific object
  sayHi: function () {
    console.log("hi");
  },
  toString() {
    return this.name;
  },
};

console.log(obj2.toString()); // here we get the output Juan instead of [object Object]

// How to modify the prototype of a javascript object

const personProtoype = {
  greet() {
    console.log("hello");
  },
};

const tim = Object.create(personProtoype);
// this creates a new empty object for us that is initialized with personPrototype as its Prototype
// because of this linkage you can write tim.greet() and this is valid because weve used the prototype
tim.greet(); // output is hello
// howeveer is you console.log(tim) you get an empty object
console.log(tim); // output {}
const joe = Object.create(personProtoype);
// you can link multiple objects to the original personPrototype this is useful so that you dont need to define
// the greet method in other objects, simply link your new object to your on Protoype

const personProtoype2 = {
  greet() {
    console.log(this.name);
  },
};
// in this instance the property is calling this.name meaning that it is accessing the property name on whatever
// calls this method
const juan = Object.create(personProtoype2);
juan.name = "Juan";
const james = Object.create(personProtoype2);
james.name = "James";

juan.greet();
james.greet();

const proto = Object.getPrototypeOf(juan);

console.log(Object.getPrototypeOf(juan)); // Output is { greet: [Function: greet] }
console.log(Object.getPrototypeOf(proto)); // Output is [Object: null prototype] {}
// here we are getting the protoype of the prototype of the juan object

// to go one step further
const proto2 = Object.getPrototypeOf(proto);
console.log(Object.getPrototypeOf(proto2)); // Output is null
// null is the prototype of the prototype of tims prototype
