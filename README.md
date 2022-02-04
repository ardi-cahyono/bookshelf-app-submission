# Bookshelf-app-submission
This repo is project submission for "Belajar Membuat Front-End Web untuk Pemula" Dicoding Indonesia course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add new book data
- Have two bookshelfs
- Move book to other bookshelf
- Delete book data
- Use local storage to save book data
- Search book by title
- Edit book data

### Screenshot

Dekstop view

![](./screenshoot-dekstop.png)

Mobile view

![](./screenshoot-mobile.png)


### Links

- Solution URL: [Repo Github](https://github.com/ardi-cahyono/bookshelf-app-submission.git)
- Live Site URL: [Github Pages](https://ardi-cahyono.github.io/bookshelf-app-submission/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Google Fonts
- Javascript

### What I learned

In this project finaly I can understand how to catch an element with JS and then put it into variable, I have also learn how to create custom event listener.

Create ondataloaded event with JS
```javascript
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null)
    books = data;

  document.dispatchEvent(new Event("ondataloaded"));
}
```
Catching an HTML element with JS
```javascript
function findBookByTitle(keywordValue) {
 const bookList = document.querySelectorAll(".book_item");

 for (let book of bookList) {
  const title = book.childNodes[0];
  if (!title.innerText.toLowerCase().includes(keywordValue)) {
   title.parentElement.style.display = 'none';
  } else {
   title.parentElement.style.display = '';
  }
 }
```

### Continued development

In the future i want to add book cover and pdf-reader for the book

### Useful resources
- [Stackoverflow](https://stackoverflow.com/) - This is an amazing website that have a lot of answers on a wide range of topics in computer programming. I recommend it to solve your error code.

## Author

- Website - [Ardi Cahyono](https://ardi-cahyono.github.io)

