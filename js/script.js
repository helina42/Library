class bookLib {
 bookList = []
 constructor(bookList){
  this.bookList = bookList;
 }

 addBook(book){
  this.bookList.push(book);
 }
 
 removeBook(book){
  newBooks = [];
  for (i = 0; i< this.bookList.length; i++){
    if (this.bookList[i].id !== book.id) {
      newBooks.push(this.bookList[i]);
    }
  }
  this.bookList = newBooks;
 }

}


// [{id: 1, name: "Book1", author: "author1"},
// {id: 2, name: "Book1", author: "author1"},
// {id: 3, name: "Book1", author: "author1"}]

/// let bookLib = [];
// const book = {};
// function getBook() {
//   book.title = document.querySelector('.title').value;
//   book.author = document.querySelector('.author').value;
//   return book;
// }

// function addBook(books) {
//   const bookLi = document.querySelector('#book-list');
//   const book = document.createElement('LI');
//   book.setAttribute('style', 'id:list');
//   book.innerHTML = `<h3> ${books.title} </h3> <p>${books.author} </p>`;
//   book.style.listStyle = 'none';
//   const delBook = document.createElement('button');
//   delBook.innerHTML = 'Delete';
//   delBook.addEventListener('click', () => {
//     book.innerHTML = '';
//   });
//   book.appendChild(delBook);
//   bookLi.appendChild(book);
// }
// const addBtn = document.querySelector('.addBook');
// addBtn.addEventListener('click', () => {
//   const book = getBook();
//   bookLib.push(book);
//   localStorage.setItem('bookLib', JSON.stringify(bookLib));
//   addBook(book);
// });

// window.onload = () => {
//   bookLib = JSON.parse(localStorage.getItem('bookLib' || '[]'));
//   if (bookLib === null) {
//     bookLib = [];
//     return;
//   }
//   bookLib.forEach((book) => {
//     addBook(book);
//   });
// };