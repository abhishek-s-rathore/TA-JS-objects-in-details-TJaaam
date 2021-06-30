// - [ ] Using function to create object

let userMethods = {
  getProject() {
    return this.noOfProjects;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
};

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;

  return user;
}

let user1 = createUser("Arya", "Strak", 12);
let user2 = createUser("John", "Snow", 21);

// - [ ] Using Object.create (prototypal pattern)

function createUser(name, id, noOfProjects) {
  let user = Object.create(createUser.prototype);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
}

createUser.prototype = {
  getProject() {
    return this.noOfProjects;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
};

let user1 = createUser("Arya", "Strak", 12);
let user2 = createUser("John", "Snow", 21);

// - [ ] Using Pseudoclassical Way

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProject() {
    return this.noOfProjects;
  },
  changeName(newName) {
    this.name = newName;
    return this.name;
  },
};

let user1 = new CreateUser("Arya", "Strak", 12);
let user2 = new CreateUser("John", "Snow", 21);

// - [ ] Using Class

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProject() {
    return this.noOfProjects;
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
}

let user1 = new User("Arya", "Strak", 12);
let user2 = new User("John", "Snow", 21);
