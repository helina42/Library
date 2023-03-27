let bookLib = [];
const book = {};
function getBook() {
  book.title = document.querySelector('.title').value;
  book.author = document.querySelector('.author').value;
  return book;
}

function addBook(books) {
  const bookLi = document.querySelector('#book-list');
  const book = document.createElement('LI');
  book.setAttribute('style', 'id:list');
  book.innerHTML = `<h3> ${books.title} </h3> <p>${books.author} </p>`;
  book.style.listStyle = 'none';
  const delBook = document.createElement('button');
  delBook.innerHTML = 'Delete';
  delBook.addEventListener('click', () => {
    book.innerHTML = '';
  });
  book.appendChild(delBook);
  bookLi.appendChild(book);
}
