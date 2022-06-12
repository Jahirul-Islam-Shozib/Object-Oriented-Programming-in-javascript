"use scrict";

const Person = function (firstName, birthYear) {
  //console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this...we should use prototype and prototype inheritance
  // this.calcAge = function () {
  //   console.log(2037 - birthYear);
  // };
};

const jonas = new Person("Jonas", 1991); // Jonas here is instance of Person
console.log(jonas);
// 1. New {} is Created
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return{}

const matila = new Person("Matila", 2017);
const jack = new Person("Jack", 1995);
console.log(matila, jack);

const jay = "Jay";
console.log(jay instanceof Person); //False

console.log(matila instanceof Person); //True

Person.hey = function () {
  console.log("Hey there");
};
Person.hey();
//jonas.hey(); // it is not in the prototype of the jonas object, so jonas object could not inherit it.

//Prototype

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matila.calcAge();

console.log(Person.prototype); // prototype of every object
console.log(jonas.__proto__); // prototype of person
console.log(jack.__proto__);

console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(jack)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototypeOfLinkesObject

Person.prototype.species = "Homo Sapiens";
console.log(jonas, matila);
console.log(jonas.species, matila.species);

console.log(jonas.hasOwnProperty("firstName")); //Ture
console.log(jonas.hasOwnProperty("species")); // False: this is not present in jonas object..but its only present on its prototype property of person

console.log(jonas.__proto__); //it is the protoype of jonas object which is the prototype property of Person

// Object.prototype( top of prototype chain)
console.log(jonas.__proto__.__proto__); // its is prototype of Person.prototype itself and it is prototype property of object

console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor); // we get the function itself

const arr = [3, 5, 6, 3, 8, 5, 9];
console.log(arr.__proto__); // This array can inherit all methods form its protoype
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // it is will return Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.log(h1);

//Coding Challenge

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.carName} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.carName} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);

const mercedes = new Car("Mercedes", 95);
//console.log(car1);

bmw.accelarate();
bmw.accelarate();
bmw.accelarate();
mercedes.accelarate();

mercedes.brake();
mercedes.brake();
mercedes.brake();
