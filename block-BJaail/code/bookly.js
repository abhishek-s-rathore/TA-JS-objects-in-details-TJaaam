let bookName = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookISBN = document.querySelector("#isbn");
let button = document.querySelector("button");
let list = document.querySelector("#root");
const form = document.querySelector(".form");

//  List
class MyBooks {
  constructor() {
    this.bookList = [];
  }

  addBook(title, author, isbn) {
    let obj = { title, author, isbn };
    this.bookList.push(obj);
    this.createUI();
  }

  handleDelete(id) {
    let index = this.bookList.findIndex((book) => book.id === id);
    this.bookList.splice(0, 1);
    this.createUI();
  }

  createUI() {
    list.innerHTML = "";
    this.bookList.forEach((book) => {
      let li = document.createElement("li");
      let pName = document.createElement("p");
      pName.innerText = book.title;
      let pAuthor = document.createElement("p");
      pAuthor.innerText = book.author;
      let pISBN = document.createElement("p");
      pISBN.innerText = book.isbn;
      let span = document.createElement("span");
      span.innerText = "❌";
      span.addEventListener("click", this.handleDelete);
      li.append(pName, pAuthor, pISBN, span);
      list.append(li);
    });
  }
}

const myBooks = new MyBooks();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = bookName.value;
  const author = bookAuthor.value;
  const isbn = bookISBN.value;
  myBooks.addBook(name, author, isbn);
});

// Item
class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.id = `id-${Date.now()}`;
  }
}
