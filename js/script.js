document.querySelector('.form').addEventListener('click', (event) => {
  event.preventDefault();
});
const bookLib = [];
let book = {};
const addBookButton = document.querySelector('.addBook');
function addBook() {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  book = {
    title,
    author,
  };
  // bookLib.push(book);
  console.log('inner', book);
}
book = addBook();
console.log('outer: ', book);

const inputTitle = document.getElementById('.title');
const inputAuthor = document.getElementById('.author');
// function storeBook() {
//   const book = {
//     title: inputTitle.value,
//     author: inputAuthor.value,
//   };
//   window.localStorage.setItem('book', JSON.stringify(book));
// }
// form.addEventListener('input', addBook);
// const savedData = JSON.parse(localStorage.getItem('book'));

// window.addEventListener('load', () => {
//   if (savedData) {
//     inputTitle.value = savedData.title;
//     inputAuthor.value = savedData.author;
//   }
//   return true;
// });

// // document.querySelector('.form').addEventListener('click', (event) => {
// //   event.preventDefault();
// // });