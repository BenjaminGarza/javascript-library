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
              <p class="card-text">Author's name: ${book.authorsName}</p>
            </li>
            <li class="list-group-item">
              <p class="card-text">Pages: ${book.numberOfPages}</p>
            </li>
            <li class="list-group-item">
              <span class="status-span">Status: </span><button onclick="updateBook(event)" data-index=${myLibrary.indexOf(book)} class="status-state">${book.status}</button>
            </li>
            <li class="list-group-item">
              <button onclick="deleting(event)" data-index="${myLibrary.indexOf(book)}" class="delete-btn">Delete book</button>
            </li>

          </ul>        
        </div>
       </div>
      `;
  });
}

function resetForm(){
  var authorsNameField = document.querySelector('#authorsName');
  var bookTitleField = document.querySelector('#bookTitle');
  var numberOfPagesField = document.querySelector('#numberOfPages');
  authorsNameField.value = "";
  bookTitleField.value = "";
  numberOfPagesField.value = "";
}

function addBookToLibrary() {
  let authorsName = document.querySelector('#authorsName').value;
  let bookTitle = document.querySelector('#bookTitle').value;
  let numberOfPages = document.querySelector('#numberOfPages').value;  
  let book = new Book(authorsName, bookTitle, numberOfPages);
  myLibrary.push(book);
  resetForm()
  render();
}

const displayForm = document.querySelector('#displayForm');
displayForm.addEventListener('click', () => {
  const form = document.querySelector('#form');
  form.classList.toggle('hide-form');
});

function updateBook(e) {
  const index = e.target.attributes[1].value;
  const targetedObject = myLibrary[Number(index)];
  if (targetedObject.status == 'Unread') {
    targetedObject.status = 'Read';
    render()
  } else {
    targetedObject.status = 'Unread';
    render()
  }
}

function deleting(e) {
  let index = e.target.attributes[1].value;
  myLibrary.splice(index, 1);
  render();
}

saveBook.addEventListener('click', () => {
  addBookToLibrary();
});
