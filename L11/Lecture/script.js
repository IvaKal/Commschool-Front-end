const user = {};
user.name = "Tom";
user.age = 25;
user.display = function () {
  console.log(user.name);
  console.log(user.age);
};

const hasNamePorp = "name" in user;
console.log(hasNamePorp);

const hasWeightProp = "weight" in user;
console.log(hasWeightProp);

function createUser(pName, pAge) {
  return {
    name: pName,
    age: pAge,
    displayInfo: function () {
      document.write("name" + this.name + "age" + this.age);
    },
    driveCar: function (car) {
      console.log(car);
      document.write(this.name + "drives car" + car.name);
    },
  };
}

function createCar(mName, mYear) {
  return {
    name: mName,
    year: mYear,
  };
}

// function User(pName,pAge) {
//     this.name = pName,
//     this.age = pAge,
//     this.displayInfo = function () {
//         document.write(this.name + this.age)
//      }
//   }

// Car type constructor
// function Car(mName, mYear ) {
//     this.name = mName,
//     this.year = mYear,
//     this.getCarInfo= function() {
//         document.write(this.name + this.year)
//     }
//  }
// // User type
// function User(pName, pAge) {
//     this.name = pName,
//     this.age = pAge,
//     this.driveCar = function (car){
//         document.write(this.name + " " + car.name)
//     }
//   }

// const tom = createUser("Tom", 25);
// tom.displayInfo();

// const tesla = createCar("Tesla", 2018)
// tom.driveCar(tesla)

// function User(pName, pAge) {
//   (this.name = pName),
//     (this.age = pAge),
//     (this.driveCar = function (car) {
//       document.write(this.name + " " + this.age);
//     });
// }

// User.prototype.hello = function () {
//   document.write(this.name + this.age);
// };

// User.prototype.maxAge = 110;

// const tom = new User("tom", 200);
// tom.hello();
// console.log(tom.maxAge);

////////////////////////////////////////////////////////////////////////
// function User(name, age) {
//   this.name = name;
//   const _age = age;
//   this.displayInfo = function () {
//     document.write("name " + this.name + "age " + _age);
//   };
//   this.getAge = function () {
//     return _age;
//   };
//   this.setAge = function (age) {
//     if (typeof age === "number" && age > 0 && age < 110) {
//       return (_age = age);
//     } else {
//       alert("non valid info");
//     }
//   };
// }
// const apxo = new User("Tom", 26)
// document.write(apxo._age)
// document.write(apxo.getAge())
// apxo.setAge(32)

function User(name, age) {
  this.name = name;
  this.age = age;
  this.go = function () {
    document.write(this.name + " " + this.age);
  };
  this.displayInfo = function () {
    document.write(this.name + this.age);
  };
}

User.prototype.maxAge = 110;

function Employee(name, age, comp) {
  User.call(this, name, age);
  this.comapany = comp;
  this.displayInfo = function () {
    document.write(this.name + this.age + this.comapany);
  };
}

Employee.prototype = Object.create(User.prototype);

const tom = new User("Tom", 26);

const bill = new Employee("Bill", 32, "Google");

// tom.go()
// bill.go()
tom.displayInfo();
bill.displayInfo();

function playGame() {
  const coices = ["rock", "paper", "scissors"];

  let playerCoice = prompt("Choose your player").toLowerCase();

  while (!coices.includes(playerCoice)) {
    playerCoice = prompt("ivalid choce").toLowerCase();
  }
  const computerCoice = coices[Math.floor(Math.random() * coices.length)];

  let result;

  if (playerCoice === computerCoice) {
    result = "Tie";
  } else if (
    (playerCoice === "rock" && computerCoice === "scissors") ||
    (playerCoice === "paper" && computerCoice === "rock") ||
    (playerCoice === "scissors" && computerCoice === "papers")
  ) {
    result = "You win";
  } else {
    result = "You lose";
  }

  alert(`you choouse ${playerCoice}, computer choose ${computerCoice}. ${result}`)
}

playGame()