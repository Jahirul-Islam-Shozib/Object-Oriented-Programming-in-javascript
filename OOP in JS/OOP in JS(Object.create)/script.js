//Object.Create

// there are no prototype properties involve and no construction function and no new operator

//we can use object.create to essentially manually set the prototype of an objec, to any other object that we want

// This object will literally the prototype of all the person objcet
const PersonProto = {
  clacAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Its create a new object and the prototype of that object
steven.name = "Steven";
steven.birthYear = 2002;
steven.clacAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto.prototype); //False
console.log(steven.__proto__ === PersonProto); //True

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1997);
sarah.clacAge();
console.log(sarah);
