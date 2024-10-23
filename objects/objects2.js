const person = {
  name: "Juan",
  children: [{ name: "joe" }, { name: "Sally" }],
};

const p1 = person;
const p2 = person;

delete p1.name;
//objects are mutable data types, that means that you can modify the object once its been declared
// that means that when we assign p1 = person we arent creating a new Object
// but we are saying that p1 is another name for this object p1 is more of an alias to the object
// console.log(person, p1, p2);

// in order to copy data from one object to the other we need to use the spread operator or ...
// this is important when we want to copy the data and modify it without changing the original object
const obj2 = {
  name: "tim",
  nums: [1, 2, 3, 4, 5],
};
// also with the spread operator we can add more properties so for example {...obj2, age: 2}
const obj3 = { ...obj2, age: 2 };
obj3.name = "Juan";
obj3.nums[0] = 100;
// when we have a property such as nums it contains a reference to an array in this case [1,2,3,4,5]
// the property nums is a reference to that array so when we change the values of the array in
// either object both are changed since they are referencing the same array
console.log(obj2);
console.log(obj3);
