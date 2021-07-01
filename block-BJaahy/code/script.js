// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// class Square{
//     constructor(side){
//        this.width = side;
//        this. height = side;
//     }
// }

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

// class Square {
//   constructor(side) {
//     this.width = side;
//     this.height = side;
//   }
//   description() {
//     alert(`The sqaure is ${this.width} X ${this.height}`);
//   }
// }

// - Create a method inside the class named `calcArea` that will return the area of the square.

// class Square {
//   constructor(side) {
//     this.width = side;
//     this.height = side;
//   }
//   description() {
//     alert(`The sqaure is ${this.width} X ${this.height}`);
//   }
//   calcArea() {
//      return this.width * this.height;
//   }
// }

// - Create a `area` getter method using which we can get the area of the square.

// class Square {
//     constructor(side) {
//       this.width = side;
//       this.height = side;
//     }
//     description() {
//       alert(`The sqaure is ${this.width} X ${this.height}`);
//     }
//     calcArea() {
//        return this.width * this.height;
//     }
//     get area(){
//         return this.width * this.height;
//     }
//   }

// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

// class Square {
//     constructor(side) {
//       this.width = side;
//       this.height = side;
//     }
//     description() {
//       alert(`The sqaure is ${this.width} X ${this.height}`);
//     }
//     calcArea() {
//        return this.width * this.height;
//     }
//     get area(){
//         return this.width * this.height;
//     }

//     set area(value){
//         let side = Math.sqrt(value);
//         this.width = side;
//         this.height = side;
//     }
//   }

// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

// class Square {
//   constructor(side) {
//     this.width = side;
//     this.height = side;
//   }
//   description() {
//     alert(`The sqaure is ${this.width} X ${this.height}`);
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
//   get area() {
//     return this.width * this.height;
//   }

//   set area(value) {
//     let side = Math.sqrt(value);
//     this.width = side;
//     this.height = side;
//   }
//   static isEqual(obj1, obj2) {
//     return obj1.width * obj1.height === obj2.width * obj2.height;
//   }
// }

// - Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`

class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
    this.numberOfTimes = 0;
  }
  description() {
    alert(`The sqaure is ${this.width} X ${this.height}`);
  }
  calcArea() {
    return this.width * this.height;
  }
  get area() {
    this.numberOfTimes += 1;
    if (this.numberOfTimes >= 4) {
      return `Maximum Limit Reached`;
    } else {
      return this.width * this.height;
    }
  }

  set area(value) {
    let side = Math.sqrt(value);
    this.width = side;
    this.height = side;
  }
  static isEqual(obj1, obj2) {
    return obj1.width * obj1.height === obj2.width * obj2.height;
  }

  numberOfTimes() {
    let count = 0;
  }
}

// - Create two instance of the `Square` class

let sq1 = new Square(200);
let sq2 = new Square(200);

// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

sq1.area;
sq1.area;
sq1.area;
sq1.area;

// - Check the `isEqual` method and pass the two instance you created above.

Square.isEqual(sq1, new Square(300));

// ## User Class

// - Create a `User` class that accepts `firstName` and `lastName` property

// class User {
//     constructor(fisrtName, lastName){
//      this.fName = fisrtName;
//      this.lName = lastName;
//     }
// }

// - Create a getter method named `fullName` that will return the full name of the person.

// class User {
//     constructor(fisrtName, lastName){
//      this.fName = fisrtName;
//      this.lName = lastName;
//     }

//     get fullName(){
//         return `${this.fName} ${this.lNmae}`;
//     }
// }

// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

// class User {
//   constructor(fisrtName, lastName) {
//     this.fName = fisrtName;
//     this.lName = lastName;
//   }

//   get fullName() {
//     return `${this.fName} ${this.lNmae}`;
//   }

//   set fullName(fullNmae) {
//     if (this.fullName.length < 5) {
//       alert(`Fullname should have  more than 4 characters`);
//     } else {
//       let arr = fullName.split(" ");
//       this.fNmae = arr[0];
//       this.lNmae = arr[1];
//     }
//   }
// }

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

class User {
  constructor(fisrtName, lastName) {
    this.fName = fisrtName;
    this.lName = lastName;
  }

  get fullName() {
    return `${this.fName} ${this.lNmae}`;
  }

  set fullName(fullName) {
    if (this.fullName.length < 5) {
      alert(`Fullname should have  more than 4 characters`);
    } else {
      let arr = fullName.split(" ");
      this.fNmae = arr[0];
      this.lNmae = arr[1];
    }
  }

  nameContains(str) {
    return `${this.fNmae} ${this.lName}`.includes(str);
  }
}

// - Create two instance of the `User` class

let user1 = new User("John", "Snow");

// - Check by using the `fullName` setter method with name bigger than 5 characters.

user1.fullName = "Arya Strak";

// - Check by using the `fullName` setter method with name less than 5 characters.

user1.fullName = "Arya";

// - Check the `fullName` using getter

user1.fullName();

// - Check the `nameContains` method

user1.nameContains("Arya");
