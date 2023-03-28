
class Book {
  id = '';

  title = '';

  author = '';

  constructor(id, title, author) {
    this.id = id;
    this.author = author;
    this.title = title;
  }
}

class bookLib {
  bookList = [];

  constructor(bookList) {
    this.bookList = bookList;
  }

  addBook(book) {
    if(book.title.trim()!==''&& book.author.trim()!==''){
      this.bookList = this.bookList.concat(book);
      localStorage.setItem('bookLib', JSON.stringify(this.bookList));
      UI(book);
    }
  }

  removeBook(book) {
    this.bookList = this.bookList.filter(filt =>filt.id !== book.id);
    localStorage.setItem('bookLib', JSON.stringify(this.bookList));
  }
}

function getBook() {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const book = new Book(myBookLib.bookList.length, title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
}
function UI(books) {
  const bookLi = document.querySelector('#book-list');
  const book = document.createElement('LI');
  book.setAttribute('style', 'id:list');
  book.id = `${books.id}`;
  book.innerHTML = `<h3> "${books.title}" by ${books.author} </h3>`;

  book.style.listStyle = 'none';
  const delBook = document.createElement('button');
  delBook.innerHTML = 'Delete';
  delBook.addEventListener('click', () => {
    myBookLib.removeBook(books);
    bookLi.removeChild(book);
  });
  book.appendChild(delBook);
  bookLi.appendChild(book);
}

const myBookLib = new bookLib([]);

const addBtn = document.querySelector('.addBook');
addBtn.addEventListener('click', () => {
  const book = getBook();
  myBookLib.addBook(book);
});

window.onload = () => {
  myBookLib.bookList = JSON.parse(localStorage.getItem('bookLib')) || [];
  myBookLib.bookList.forEach((book) => {
    UI(book);
  });
};