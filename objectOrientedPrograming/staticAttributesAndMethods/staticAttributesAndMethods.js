class Person {
  name;
  static numberOfPeople = 0;

  constructor(name) {
    this.name = name;
    // to access the static property you need to use Person.numberOfPeople not this.numberOfPeople
    Person.numberOfPeople++;
  }
  // when we want to create a static method we use the same sintax but the difference is that we can use
  // this.numberOfPeople since "this" is referencing the class that is calling it
  static getNumberOfPeople() {
    if (this.numberOfPeople >= 10) this.removePerson();
    return this.numberOfPeople;
  }
  static removePerson() {
    this.numberOfPeople--;
  }
}

const p = new Person("Tim");
const p2 = new Person("Joe");
console.log(Person.numberOfPeople); // output is 2
// in this instance we want the number of people to count up each time we name a new person but we need that
// value to be static if it is not static when we console.log(p.numberOfPeople and p2.numberOfPeople)
// we will get 1 and 1 instead when we make numberOfPeople static inside our class
// it updates every time we name a new person
// static properties need to be associated with the class not the instance
// anthing static is associated with the class anything non static is associated with the instance

console.log(Person.getNumberOfPeople());
