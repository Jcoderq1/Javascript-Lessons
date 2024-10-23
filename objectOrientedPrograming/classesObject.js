/*
if we think of a classroom or school setting the types of objects we might have are as follows:
inside those obects we have what makes up a school
in object oriented programing we jave these classes
in other object oriented programs we create classes with instances of tacher class, or 20 instances of the
student class etc..
Person
- name
- age

Teacher

- salary
- teach()
- grade()

Student
- greet()

Class 
- students
- teacher
*/
// with classes you begin with a capital it is called pascal case
// for classes you dont need to use let or const to create properties insde
class Person {
  name;
  age;
  // a constructor is a function that runs every time this class is initiated or instansiated
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi(shouldsayBye) {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    if (shouldsayBye) {
      console.log("Bye");
    }
  }
}
// classes act as a blueprint for creating different objects
// another way for creating objects is using the new Keyword
const person = new Person("tim", 10);

const person2 = new Person("Joe", 12);
console.log(person, person2); // output is Person { name: 'tim', age: 10 } Person { name: 'Joe', age: 12 }
// in this instance we use the Person class to construct our object wihtout having to define each property
person.sayHi(false);
person2.sayHi(true);
// you can take out the constructor and instead add properties to the object by using the obectname.color, age, height etc...
