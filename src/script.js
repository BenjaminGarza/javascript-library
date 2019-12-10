const myLibrary = [];
const saveBook = document.querySelector('#saveBook');


function Book(authorsName, bookTitle, numberOfPages) {
  this.authorsName = authorsName;
  this.bookTitle = bookTitle;
  this.numberOfPages = numberOfPages;
  this.status = 'Unread';
}

function render() {
  const container = document.querySelector('#displayBooks');
  container.innerHTML = '';
  myLibrary.forEach((book) => {
    container.innerHTML += `<div class="col-sm-3 mb-2">
        <div class="card card-block" data-index="${myLibrary.indexOf(book)}">
          <ul class="list-group">
            <li class="list-group-item">
              <h4 class="card-title">
                Book title: ${book.bookTitle}
              </h4>
            </li>
            <li class="list-group-item">
              <p class="card-text">Authors name: ${book.authorsName}</p>
            </li>
            <li class="list-group-item">
              <p class="card-text">pages: ${book.numberOfPages}</p>
            </li>
            <li class="list-group-item">
              <span class="status-span">status: </span><button onclick="updateBook(event)" data-index=${myLibrary.indexOf(book)} class="status-state">${book.status}</button>
            </li>
            <li class="list-group-item">
              <button onclick="deleting(event)" data-index="${myLibrary.indexOf(book)}" class="delete-btn">delete book</button>
            </li>

          </ul>        
        </div>
       </div>
      `;
  });
}