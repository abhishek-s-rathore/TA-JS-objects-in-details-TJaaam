// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

//---------------------------------------------------------------------//
//-----------------------Pseudoclassical Inheritance-------------------//

// Animals

function Animals(location, legs = 4) {
  this.location = location;
  this.numberOfLegs = legs;
}

Animals.prototype = {
  eat: function () {
    alert(`I live in ${this.location} and I can eat.`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    alert(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

// Dogs

function Dogs(location, legs = 4, name, color = "mixed") {
  Animals.apply(this, [location, legs]);
  this.name = name;
  this.color = color;
}

Dogs.prototype = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶!`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    alert(
      `I am ${this.name} and I am of ${this.color} color. I can also bark 🐶!`
    );
  },
};

// Inheritance
Object.setPrototypeOf(Dogs.prototype, Animals.prototype);

// Cats

function Cats(location, legs = 4, name, color) {
  Animals.apply(this, [location, legs]);
  this.name = name;
  this.colorOfEyes = color;
}

Cats.prototype = {
  meow: function () {
    alert(`I am ${this.name} and I can meow 😹!`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function () {
    alert(
      `I am ${this.name} and color of my eyes is ${this.colorOfEyes}. I can also meow 😹!`
    );
  },
};

// Inheritance
Object.setPrototypeOf(Cats.prototype, Animals.prototype);

// Tests
let animal1 = new Animals("Land", 4);
let animal2 = new Dogs("Land", 4, "Husky", "White");
let animal3 = new Cats("Land", 4, "Kitty", "Blue");

//---------------------------------------------------------------------//
//-----------------------Class Inheritance Pattern---  ----------------//

//Animals

class Animals {
  constructor(location, legs = 4) {
    this.location = location;
    this.numberOfLegs = legs;
  }

  eat() {
    alert(`I live in ${this.location} and I can eat.`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    alert(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  }
}

// Dogs

class Dogs extends Animals {
  constructor(location, legs = 4, name, color = "mixed") {
    super(location, legs);
    this.name = name;
    this.color = color;
  }

  bark() {
    alert(`I am ${this.name} and I can bark 🐶!`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    alert(
      `I am ${this.name} and I am of ${this.color} color. I can also bark 🐶!`
    );
  }
}

class Cats extends Animals {
  constructor(location, legs = 4, name, color) {
    super(location, legs);
    this.name = name;
    this.colorOfEyes = color;
  }

  meow() {
    alert(`I am ${this.name} and I can meow 😹!`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary() {
    alert(
      `I am ${this.name} and color of my eyes is ${this.colorOfEyes}. I can also meow 😹!`
    );
  }
}

// Tests
let animal1 = new Animals("Land", 4);
let animal2 = new Dogs("Land", 4, "Husky", "White");
let animal3 = new Cats("Land", 4, "Kitty", "Blue");
