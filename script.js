let myLibrary = ["asd", "fgh", "jkl"];

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

document.querySelector("#addButton").addEventListener("click", function () {
  createBook();
});

const createBook = (book) => {
  // const container = document.querySelector('#container');
  // const createBook = document.createElement('div');
  // const title = document.createElement('input');
  // const author = document.createElement('input');
  // const pages = document.createElement('input')
  // createBook.classList.add('active');
  // container.classList.add('inactive');
  // createBook.setAttribute('id', 'createBook');
  // pages.setAttribute('type', 'number');
  // document.body.appendChild(createBook)
  // createBook.appendChild(title);
  // createBook.appendChild(author);
  // createBook.appendChild(pages);
  // document.querySelector("#createDiv").classList.add('active');
};

// const greatGatsby = new Book('Great Gatsby', 'F. Scott Fitzgerald', 208, true, 'info goes here');