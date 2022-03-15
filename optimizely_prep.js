// Request headers

let myHeaders = new Headers({
  "User-Agent": "https://github.com/smllygrl/optimizelyPrep",
  Accept: "application/json",
});

// KANYE
const kanyeBtn = document.getElementById("kanyeBtn");
const kanyeClearBtn = document.getElementById("kanyeBtn__clear");
const kanyeDiv = document.getElementById("kanyeDOM");
const KANYE_URL = "https://api.kanye.rest";

kanyeClearBtn.addEventListener("click", () => {
  clear(kanyeDiv);
});

kanyeBtn.addEventListener("click", () => {
  console.log("Kanye button pressed");
  accessKanye();
});

const accessKanye = async () => {
  clear(kanyeDiv);
  const kanyeRaw = await fetch(`${KANYE_URL}`);
  const kanyeResponse = await kanyeRaw.json();
  const kanyeToRender = `${kanyeResponse.quote}`;
  append("p", kanyeToRender, kanyeDiv);
};

// DAD JOKES
const dadJokeBtn = document.getElementById("dadjokeBtn");
const dadJokeDiv = document.getElementById("dadjokeDOM");
const dadJokeClearBtn = document.getElementById("dadjokeBtn__clear");
const DADJOKE_URL = "https://icanhazdadjoke.com/";

dadJokeClearBtn.addEventListener("click", () => {
  clear(dadJokeDiv);
});

dadJokeBtn.addEventListener("click", () => {
  console.log("Dad joke button pressed");
  accessDadJoke();
});

const accessDadJoke = async () => {
  clear(dadJokeDiv);
  const dadJokeRaw = await fetch(`${DADJOKE_URL}`, {
    headers: myHeaders,
  });
  const dadJokeResponse = await dadJokeRaw.json();
  const dadJokeRender = `${dadJokeResponse.joke}`;
  append("p", dadJokeRender, dadJokeDiv);
};

// SIMPLE TEXT
const textBtn = document.getElementById("textSubmit");
const textBoxDiv = document.getElementById("textboxDOM");
const textInput = document.getElementById("textInput");
const textClearBtn = document.getElementById("textDelete");

textClearBtn.addEventListener("click", () => {
  clear(textBoxDiv);
});

textBtn.addEventListener("click", () => {
  console.log("Text button pressed");
  clear(textBoxDiv);
  accessText();
});

const accessText = () => {
  const textToRender = textInput.value;
  console.log(textToRender);
  append("p", textToRender, textBoxDiv);
  textInput.value = "";
};

// GOOGLE BOOKS
const GOOGLEBOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const bookSearchBtn = document.getElementById("bookBtn");
const bookClearBtn = document.getElementById("bookClearBtn");
const bookDiv = document.getElementById("bookDOM");
const bookInput = document.getElementById("bookInput");

bookSearchBtn.addEventListener("click", () => {
  getInputFromUser();
});

bookClearBtn.addEventListener("click", () => {
  clear(bookDiv);
});

const getInputFromUser = () => {
  clear(bookDiv);
  const query = bookInput.value;
  const formattedQuery = query.replaceAll(" ", "+");
  console.log(formattedQuery);
  accessBooks(formattedQuery);
  bookInput.value = "";
};

const accessBooks = async (formattedQuery) => {
  const bookRaw = await fetch(`${GOOGLEBOOKS_URL}${formattedQuery}`);
  const bookResponse = await bookRaw.json();
  const index = getRandomNumber();
  const book = bookResponse.items[index];
  console.log(book);
  renderBook(book);
};

const renderBook = (book) => {
  console.log(book);

  const title = book.volumeInfo.title;
  append("h3", title, bookDiv);

  const image = book.volumeInfo.imageLinks?.smallThumbnail;
  const bookImage = document.createElement("img");
  bookImage.src = image;
  bookDiv.appendChild(bookImage);

  const authorArr = book.volumeInfo.authors;
  const authorStr = authorToString(authorArr);
  append("h4", `Written by: ${authorStr}`, bookDiv);
};

// HELPER FUNCITONS
const append = (element, nodeContent, parent) => {
  const newElement = document.createElement(element);
  const elementContent = document.createTextNode(nodeContent);
  newElement.appendChild(elementContent);
  parent.appendChild(newElement);
};

const authorToString = (authorArr) => {
  console.log(authorArr);
  const length = authorArr.length;
  let returnString = "";
  for (let i = 0; i < length; i++) {
    let authorString = authorArr[i];
    returnString = returnString + authorString + " ";
  }
  console.log(returnString);
  return returnString;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const clear = (divID) => {
  divID.innerHTML = "";
};
