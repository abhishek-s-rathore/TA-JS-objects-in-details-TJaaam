class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log(`${this.name} can eat.`);
  }
  sleep() {
    console.log(`${this.name} can sleep.`);
  }
  walk() {
    console.log(`${this.name} can walk.`);
  }
}

// Player

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  play() {
    console.log(`I play Cricket!`);
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }

  playCricket() {
    console.log(`I ${this.teamName} play Cricket!`);
  }
}

// Teacher

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teaches() {
    console.log(`I teaches physics!`);
  }
}

// Artist

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    console.log(`I performs in Theaters!`);
  }
}
