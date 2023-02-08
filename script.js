const myLibrary = [];

function Book(title, author, pages, completed, info) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
  this.info = function () {
    return info;
  };
}

function addBookToLibrary() {
  const div = document.createElement("div");
  document.getElementById("books").appendChild(div);
  document.getElementById("books").lastChild.innerHTML =
    myLibrary[myLibrary.length - 1];
}

const bookModal = document.getElementById("bookModal");
const addButton = document.getElementById("addButton");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("form");
const span = document.getElementsByClassName("close")[0];
const completion = document.getElementById("read");
const title = document.getElementById("title");

addButton.onclick = function () {
  bookModal.style.display = "block";
};

span.onclick = function () {
  bookModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == bookModal) {
    bookModal.style.display = "none";
  }
};
