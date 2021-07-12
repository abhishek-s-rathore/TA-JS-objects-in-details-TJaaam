let list = document.querySelector("#todos");
let inputData = document.querySelector("#inputTodo");

//LIST

class TodoList {
  constructor() {
    this.todos = [];
  }

  createUI() {
   
    list.innerHTML = "";
    this.todos.forEach((todo) => {
      let ui = todo.createUI();
      ui.querySelector("span").addEventListener(
        "click",
        this.handleDelete.bind(this, todo.id)
      );
    list.append(ui);
    });
  }

  add(text) {
    let todo = new Todo(text);
    this.todos.push(todo);
    this.createUI();
  }

  handleDelete(id) {
    let index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
    this.createUI();
  }
}

let myTodo = new TodoList();

//ITEMS

class Todo {
  constructor(text) {
    this.text = text;
    this.isDone = false;
    this.id = `id-${Date.now()}`;
  }

  handleCheck() {
    this.isDone = !this.isDone;
    myTodo.createUI();
  }

  createUI() {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("innerDiv");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.isDone;
    input.addEventListener("click", this.handleCheck.bind(this));
    let p = document.createElement("label");
    p.style.textDecoration = this.isDone ? "line-through" : "none";
    p.style.color = this.isDone ? "rgb(73, 63, 63)" : "black";
    p.innerText = this.text;
    let span = document.createElement("span");
    span.innerText = "❌";
    li.addEventListener("click", this.handleDelete);
    div.append(input, p);
    li.append(div, span);
    return li;
  }
}

inputData.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    myTodo.add(event.target.value);
    event.target.value = "";
  }
});

myTodo.createUI();
