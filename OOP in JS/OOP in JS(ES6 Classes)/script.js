"use scrict";
//Class Expression
//const PersonCl = class {};

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance Method
  //Methods will be added to .prototype property
  clacAge() {
    console.log(2037 - this.birthYear); //it will be the prototype of the object and not on the object themselves.
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //Set a property that already exists
  set fullName(name) {
    //console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  //Static Method// they are sometimes useful to implement some kind of helper function about a class or about a constructor function
  static hey = function () {
    console.log("Hey there");
  };
}

const shozib = new PersonCl("Shozib zahir", 1995);
console.log(shozib);
shozib.clacAge();
console.log(shozib.age);
console.log(PersonCl.prototype);
console.log(shozib.__proto__);
console.log(shozib.__proto__ === PersonCl.prototype);

PersonCl.hey(); // these static methods are available on the intances

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
shozib.greet();

// 1. Classes are not Hoisted but function declaration are hoisted which means we can use them before declaration in the code but in classes that does not work.
// 2. Classes are first-class citizens means they can pass them into function and return them from function
//3. Classes are executed in strict mode

// stters and getters(those are called assesor properties while the normal properties are called data properties, setters and getters are function)

// const walter = new PersonCl("walter", 1965);// here walter is not a full name
const walter = new PersonCl("walter white", 1965);
console.log(walter);

const account = {
  owner: "Jonas",
  movements: [200, 500, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    // any seter method need a parameter
    this.movements.push(mov);
  },
};

console.log(account.latest); //we can simply use it as a property
account.latest = 50;
console.log(account.movements);

//Coding Challenge2

class CarCl {
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.carName} going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.carName} going at ${this.speed}`);
  }
  get speedUS() {
    return (this.speed /= 1.6);
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford);
console.log(ford.speedUS);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();

ford.speedUS = 75;
console.log(ford);
