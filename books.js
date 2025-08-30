const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); // unique id
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index > -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

function toggleBookRead(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
}

// Display books in cards
function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id);

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not read ❌"}</p>
      <button class="toggleBtn">Toggle Read</button>
      <button class="removeBtn">Remove</button>
    `;

    libraryDiv.appendChild(card);

    // Button events
    card.querySelector(".removeBtn").addEventListener("click", () => {
      removeBook(book.id);
    });

    card.querySelector(".toggleBtn").addEventListener("click", () => {
      toggleBookRead(book.id);
    });
  });
}

// ===== Form Handling =====
const dialog = document.getElementById("bookDialog");
const form = document.getElementById("bookForm");

document.getElementById("newBookBtn").addEventListener("click", () => {
  dialog.showModal();
});

document.getElementById("closeDialog").addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent refresh
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  form.reset();
  dialog.close();
});

// ===== Sample Books for Testing =====
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
