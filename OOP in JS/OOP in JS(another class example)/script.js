//1)Public fields
//2)Private fields
//3)public methods
//4)private methods
//5)(there is also the static version)

class Account {
  //1)Public fields
  locale = navigator.language; //those public fields are gonna be present on all the instances that we are creating through class and also they are not on the prototype

  //2)Private fields
  #movements = []; //Truely private
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; //Protected but not fully private
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account,${owner}`);
  }

  // 3)Public Methods
  //Public Interface

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    //if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }
  //These static methods will not be available on all the instances, but only on the class itself.
  static helper() {
    console.log("Helper");
  }
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EURO", 1111, []);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-200);
acc1.deposit(250);
acc1.withdraw(200);
console.log(acc1.getMovements());
//console.log(acc1.#pin); // that is truely private

acc1.requestLoan(1000);

//console.log(acc1.#movements);//It will not work for private

acc1._approveLoan(100); //It is protcted
//acc1.#approveLoan(1000); //It is private and may be will use in future now browser taking it as a fields not methods.

Account.helper();

//Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//Coding Challenge

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
    console.log(`${this.carName} going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return (this.speed /= 1.6);
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

class EvCl extends CarCl {
  //Private Fields
  #charge;
  constructor(carName, speed, charge) {
    super(carName, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.carName} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      } %`
    );
    return this;
  }
}

const rivian = new EvCl("Rivian", 120, 24);
console.log(rivian);

rivian.accelerate();
//console.log(rivian.#charge);// it will not accessable cause of private

///Chaining

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
