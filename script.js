function Book(title, author, pages, completed, info) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
  this.info = function() {
    return info;
  }
}

const greatGatsby = new Book('Great Gatsby', 'F. Scott Fitzgerald', 208, true, 'info goes here');

console.log(greatGatsby.info())