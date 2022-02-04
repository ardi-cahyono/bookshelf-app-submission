const STORAGE_KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert("Mohon maaf Peramban Anda tidak mendukung Local Storage")
    return false;
  }
  return true;
}

function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event("ondatasaved"));
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null)
    books = data;

  document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
  if (isStorageExist()) {
    saveData();
  }
}

function composeBookObject(Title, Author, Year, isCompleted) {
  return {
    id: +new Date(),
    Title,
    Author,
    Year,
    isCompleted
  }
}

function findBook(bookId) {
  for (book of books) {
    if (book.id === bookId)
      return book;
  }
  return null;
}

function findBookIndex(bookId) {
  let index = 0
  for (book of books) {
    if (book.id === bookId)
      return index;

    index++;
  }

  return -1;
}

function refreshDataFromBooks() {
  const incompleteBOOKList = document.getElementById(INCOMPLETED_BOOK_LIST_ID);
  let completeBOOKList = document.getElementById(COMPLETE_BOOK_LIST_ID);

  for (book of books) {
    const newBook = makeBook(book.Title, book.Author, book.Year, book.isCompleted);
    newBook[BOOK_ITEMID] = book.id;

    if (book.isCompleted) {
      completeBOOKList.append(newBook);
    } else {
      incompleteBOOKList.append(newBook);
    }
  }
}

function changeYear() {
  footerText = document.querySelector(".foot_bar__title");
  let getDate = new Date();
  const currentYear = getDate.getFullYear();

  const newFooterText = 'Copyright ©' + currentYear + ' ' + 'by Ardi Cahyono';

  footerText.innerText = newFooterText;
}