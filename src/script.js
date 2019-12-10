const myLibrary = [];
const saveBook = document.querySelector('#saveBook');


function Book(authorsName, bookTitle, numberOfPages) {
  this.authorsName = authorsName;
  this.bookTitle = bookTitle;
  this.numberOfPages = numberOfPages;
  this.status = 'Unread';
}