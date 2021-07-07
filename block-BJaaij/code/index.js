/*
## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.


#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
*/

class BookList {
  constructor() {}
}

class Book {
  constructor(title, cat, auth, isRead = false, finish) {
    this.title = title;
    this.catagory = cat;
    this.author = auth;
    this.isRead = isRead;
    this.finishDate = finish;
  }
  markBookAsRead() {
    this.isRead = true;
    return this.isRead;
  }
}

class BookList {
  constructor(bookArray, currentReadBookIndex = 0) {
    this.bookArray = bookArray;
    this.currentReadBookIndex = currentReadBookIndex;
  }
  add(...book) {
    this.bookArray.push(book);
    return this.bookArray;
  }
  getCurrentBook() {
    return this.bookArray[this.currentBookIndex];
  }
  getNextBook() {
    return this.bookArray[this.currentBookIndex + 1];
  }
  getPrevBook() {
    return this.bookArray[this.currentBookIndex - 1];
  }
  changeCurrentBook(newIndex) {
    this.currentBookIndex = newIndex;
    return this.currentBookIndex;
  }
}

let book1 = new Book(
  "Rich dad Poor Dad",
  "Motivational and finance",
  "Robert",
  false,
  "7/7/21"
);
let book2 = new Book(
  "The magic of believing",
  "motivational, mind-science",
  "Bristol",
  false,
  "17/7/21"
);

let bookList = new BookList([book1, book2]);
