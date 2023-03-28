let bookLib = JSON.parse(localStorage.getItem('bookLib')) || [];
function getBook() {
  const book = {};
  book.title = document.querySelector('.title').value;
  book.author = document.querySelector('.author').value;
  book.id = '';

  if (bookLib === null) {
    book.id = 0;
  } else {
    book.id = bookLib.length;
  }
  return book;
}
function addBook(books) {
  const bookLi = document.querySelector('#book-list');
  const book = document.createElement('LI');
  book.setAttribute('style', 'id:list');
  book.id = `${books.id}`;
  book.innerHTML = `<h3> ${books.title} </h3> <p>${books.author} </p>`;
  book.style.listStyle = 'none';
  const delBook = document.createElement('button');
  delBook.innerHTML = 'Delete';
  delBook.addEventListener('click', () => {
    const filtered = bookLib.filter((book) => book.id !== books.id);
    localStorage.setItem('bookLib', JSON.stringify(filtered));
    window.location.reload();
  });
  book.appendChild(delBook);
  bookLi.appendChild(book);
}
const addBtn = document.querySelector('.addBook');
addBtn.addEventListener('click', () => {
  const book = getBook();
  bookLib.push(book);
  localStorage.setItem('bookLib', JSON.stringify(bookLib));
  addBook(book);
  window.location.reload();
});

window.onload = () => {
  bookLib = JSON.parse(localStorage.getItem('bookLib' || '[]'));
  if (bookLib === null) {
    bookLib = [];
    return;
  }
  bookLib.forEach((book) => {
    addBook(book);
  });
};