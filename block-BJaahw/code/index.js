// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 1-2
function createUser(name, age) {
  let user = {};
  user.name = name;
  user.age = age;
  user.sayHello = function () {
    alert(`Welcome ${user.name}!`);
  };
  return user;
}

//3
let person1 = createUser("Arya", 19);
let person2 = createUser("John", 21);

//4
function createUser(name, age) {
  let user = Object.create(createUser.prototype);
  user.name = name;
  user.age = age;

  return user;
}

createUser.prototype = {
  sayHello() {
    alert(`Welcome ${this.name}!`);
  },
};

let person1 = createUser("Arya", 19);
let person2 = createUser("John", 21);

//5-6
function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype = {
  sayHello() {
    alert(`Welcome ${this.name}!`);
  },
};

let person1 = new CreateUser("Arya", 19);
let person2 = new CreateUser("John", 21);

// 7
person1.sayHello();
person2.sayHello();

// 8
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    alert(`Welcome ${this.name}!`);
  }
}

// 9
let personOne = new User("Arya", 19);
let personTwo = new User("John", 21);

// 10
personOne.sayHello();
personTwo.sayHello();
