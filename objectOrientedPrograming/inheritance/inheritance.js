// Person is the parent or super class
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return this.name + " " + this.age;
  }
}
class Teacher extends Person {
  // the extends keyword uses the logic and methods from Person and gives it to the child class Teacher
  salary;
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  greet() {
    return "I am your teacher" + " " + super.greet(); // in this case we reference the greet method in the parent class and the out put is both
    // I am your teacher sally 30
  }
}
// Student is the child class because it is inheriting the properties and methods of Person
class Student extends Person {
  group;

  constructor(name, age, group) {
    super(name, age); // the super function calls/references the constructor of the Parent class
    this.group = group;
  }
}
// we can modify and add attributes to the student class while still maintaining the inherited properties

const s1 = new Student("Tim", 10, "A");
const t1 = new Teacher("Sally", 30, 65000);
console.log(s1); // output Student { name: 'Tim', age: 10, group: 'A' }
console.log(s1.greet()); // OutPut is tim 10
console.log(t1.greet()); // out put is I am your teacher Sally 30

// if you define the greet method inside of your teacher class to say something different using the protoype method javascript will look
// to see if a greet method is defined inside of teacher class and use that otherwise it would get the protoype of the teacher class and use
// the greet method found there
