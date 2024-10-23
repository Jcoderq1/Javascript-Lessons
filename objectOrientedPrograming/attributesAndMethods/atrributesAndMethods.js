class Teacher {
  name;
  age;
  #salary;

  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.#salary = salary;
  }
  // this is known as a getter which gets the hidden data from a class when you call this function
  getSalary() {
    return this.#salary;
  }
  // this is known as the setter which allows the user to set a new value for slary without modifying
  // the original class, this ensures that someone cant break our code by setting an ivalid value
  setSalary(newSalary) {
    if (newSalary <= 0) {
      throw Error("Invalid salary, must be above 0");
    }
    this.#salary = newSalary;
  }
}
// when you dont want somone to misues or alter your code we do what called incapsulation
// # before a property hides different logic or data inside the Teacher class so that no one can use it
// in this instance we are hiding the salary by putting #salary; inside our class and constructor this.#salary
const teacher = new Teacher("Joe", 24, 65000);
teacher.setSalary(1000);
console.log(teacher.getSalary());

// you can also use the # on methods or functions inside classes to make them private just put the #before the
// method or function and it will make it private
