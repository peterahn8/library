const bookModal = document.getElementById('bookModal');
const addButton = document.getElementById('addButton');
const form = document.getElementById('form');
const span = document.getElementsByClassName('close')[0];
const library = document.getElementById('library');
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

function addBookToMyLibrary() {
  const formData = new FormData(form);

  let completed;
  if (formData.get('completed') === 'read') {
    completed = true;
  } else {
    completed = false;
  }

  const newBook = new Book(
    formData.get('title'),
    formData.get('author'),
    formData.get('pages'),
    completed
  );

  myLibrary.push(newBook);
  addBookCard(newBook);
}

function addBookCard(newBook) {
  const bookCard = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const completed = document.createElement('div');
  const removeButton = document.createElement('button');
  const toggleRead = document.createElement('button');
  const idIndex = myLibrary.indexOf(newBook);

  library.append(bookCard);
  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', idIndex);

  title.textContent = 'Title: ' + newBook.title;
  title.classList.add('title');
  bookCard.append(title);

  author.textContent = 'Author: ' + newBook.author;
  author.classList.add('author');
  bookCard.append(author);

  pages.textContent = 'Page Count: ' + newBook.pages;
  pages.classList.add('pages');
  bookCard.append(pages);

  if (newBook.completed) {
    completed.textContent = 'read';
    bookCard.classList.add('read');
  } else {
    completed.textContent = 'unread';
    bookCard.classList.add('unread');
  }
  completed.classList.add('completed');
  bookCard.append(completed);

  removeButton.textContent = 'Remove book';
  bookCard.append(removeButton);
  removeButton.addEventListener('click', function () {
    bookCard.remove();
    updateLibraryArray(idIndex);
  });

  toggleRead.textContent = 'Toggle read';
  bookCard.append(toggleRead);
  toggleRead.addEventListener('click', function () {
    if (completed.textContent === 'read') {
      completed.textContent = 'unread';
      bookCard.classList.toggle('unread')
      bookCard.classList.toggle('read')
      myLibrary[idIndex].completed = false;
    } else {
      completed.textContent = 'read';
      bookCard.classList.toggle('read')
      bookCard.classList.toggle('unread')
      myLibrary[idIndex].completed = true;
    }
  });
}

function updateLibraryArray(idIndex) {
  myLibrary.splice(idIndex, 1);
  const bookCardIterator = document.querySelectorAll('.bookCard');
  for (let i = 0; i < bookCardIterator.length; i++) {
    bookCardIterator[i].setAttribute('id', i);
  }
}

addButton.onclick = function () {
  bookModal.style.display = 'block';
};

span.onclick = function () {
  bookModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === bookModal) {
    bookModal.style.display = 'none';
  }
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  addBookToMyLibrary();
});
