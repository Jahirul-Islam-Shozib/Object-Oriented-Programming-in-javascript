//How Inheritance between classes works with constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); // here we call this Person function
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //True
console.log(mike instanceof Person); //Also true cause we linked the prototypes together
//console.log(mike instanceof object);

console.dir(Student.prototype.constructor); // It will return the Person
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // It will return the Student

//Coding Challenge 3

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

const Ev = function (carName, speed, charge) {
  Car.call(this, carName, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Car.prototype = function () {
  this.spped += 10;

  console.log(`${this.carName} going at ${this.speed} km/h`);
};

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.carName} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
const tesla = new Ev("Tesla", 120, 35);

// tesla.accelerate();
// tesla.accelerate();
tesla.chargeBattery(90);

tesla.accelerate(); // a child class can overwrite a method that inherited from the parent class, this is exactly the defination of polymorphism
console.log(tesla);
