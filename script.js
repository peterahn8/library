const bookModal = document.getElementById('bookModal');
const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('form');
const span = document.getElementsByClassName('close')[0];

const library = document.getElementById('library');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const completion = document.getElementsByName('completion');
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
  let completion;
  const formData = new FormData(form);
  if (formData.get('completion') === 'read') {
    completion = true;
  } else {
    completion = false;
  }
  const newBook = new Book(
    formData.get('title'),
    formData.get('author'),
    formData.get('pages'),
    completion
  );

  myLibrary.push(newBook);
  addBookCard(newBook);
}

function addBookCard(newBook) {
  const bookCard = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const completion = document.createElement('div');

  title.textContent =

  library.append(bookCard);
  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', myLibrary.indexOf(newBook));

  title.textContent = newBook.title;
  title.classList.add('title')
  bookCard.append(title)
}

const greatGatsby = new Book(
  'Great Gatsby',
  'F. Scott Fitzgerald',
  '208',
  true,
  'Book about wealth and depression.'
);

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
  addBookToLibrary();
});
