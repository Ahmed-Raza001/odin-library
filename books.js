let myLibrary = [];

function Book(title, author, pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryBook = document.querySelector("library");
  for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.Style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
})