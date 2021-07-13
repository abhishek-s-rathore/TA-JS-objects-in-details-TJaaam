let form = document.querySelector("form");
let bookListRoot = document.querySelector("#bookList");

const bookName = form.elements.title;
const bookAuthor = form.elements.author;
const bookISBN = form.elements.isbn;

//  List
class MyBooks {
  constructor(books = []) {
    this.books = books;
  }

  addBook(name, author, isbn) {
    let book = new Book(name, author, isbn);
    this.books.push(book);
    this.createUI();
  }

  createUI(data = this.books) {
    bookListRoot.innerHTML = "";
    data.forEach((book, index) => {
      // console.log(book);
      let li = document.createElement("li");
      let pName = document.createElement("p");
      pName.innerText = book.name;
      let pAuthor = document.createElement("p");
      pAuthor.innerText = book.author;
      let pISBN = document.createElement("p");
      pISBN.innerText = book.isbn;
      let input = document.createElement("input");
      input.type = "checkbox";
      input.checked = book.isRead;
      input.addEventListener("click", book.handleCheck.bind(this, index));
      pISBN.innerText = book.isbn;
      let span = document.createElement("span");
      span.innerText = "❌";
      span.addEventListener("click", book.handleDelete.bind(this, book.id));

      li.append(pName, pAuthor, pISBN, input, span);
      bookListRoot.append(li);
    });
  }
}

let library = new MyBooks();

// Item

class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }

  handleCheck(index) {
    // console.log(this);
    this.books[index].isRead = !this.books[index].isRead;
  }

  handleDelete(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.createUI();
    // console.log(this.books);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const name = bookName.value;
  const author = bookAuthor.value;
  const isbn = bookISBN.value;
  // console.log(name, author, isbn);
  library.addBook(name, author, isbn);
  bookName.value = "";
  bookAuthor.value = "";
  bookISBN.value = "";
}

form.addEventListener("submit", handleSubmit);
