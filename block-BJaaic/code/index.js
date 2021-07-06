// # Inheritance

// Convert the below requirements into inheritance using prototypal patterns.

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

//  Methods

let animalsMethods = {
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

// Dogs Methods

let dogsMethods = {
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

//Prototypal Inheritance
Object.setPrototypeOf(dogsMethods, animalsMethods);

// Cats Methods

let catsMethods = {
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

//Prototypal Inheritance
Object.setPrototypeOf(catsMethods, animalsMethods);

// Animals

function animals(location, legs = 4) {
  let animal = Object.create(animalsMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  return animal;
}

// Dogs

function dogs(location, legs = 4, name, color = "mixed") {
  let animal = Object.create(dogsMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  animal.name = name;
  animal.color = color;
  return animal;
}

// Cats

function cats(location, legs = 4, name, color) {
  let animal = Object.create(catsMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  animal.name = name;
  animal.colorOfEyes = color;
  return animal;
}

let animal1 = animals("Land", 4);
let animal2 = dogs("Land", 4, "Husky", "White");
let animal3 = cats("Land", 4, "Kitty", "Blue");
