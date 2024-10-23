// objects are a way to store multiple properties in one varible or one reference
const person = {
  name: "Juan",
  children: [{ name: "joe" }, { name: "sally" }],
};

console.log("children" in person);
// objects have index access when looking at the properties of an object
// to check if a property exists in an object you do console.log("name" in person)

// to loop through an object you can do the following
for (const property in person) {
  console.log(property);
}
// to access a variable in this for loop you have console.log(person[property]);

//in order to access all property names as well as values

for (const [property, value] of Object.entries(person)) {
  console.log(property, value);
}

// Object.values gives you the values in each property so Juan, Joe, sally
// Object.keys gives you the property name
