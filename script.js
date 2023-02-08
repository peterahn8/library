const bookModal = document.getElementById('bookModal');
const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
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

  title.textContent = library.append(bookCard);
  bookCard.classList.add('bookCard');
  bookCard.setAttribute('id', myLibrary.indexOf(newBook));

  title.textContent = newBook.title;
  title.classList.add('title');
  bookCard.append(title);

  author.textContent = newBook.author;
  author.classList.add('author');
  bookCard.append(author);

  pages.textContent = newBook.pages;
  pages.classList.add('pages');
  bookCard.append(pages);

  if (newBook.completed) {
    completed.textContent = 'read';
  } else {
    completed.textContent = 'unread'
  }
  completed.classList.add('completed');
  bookCard.append(completed);

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
  addBookToMyLibrary();
});
