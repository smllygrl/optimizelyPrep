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

// const clearKanye = ()

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
  accessText();
});

const accessText = () => {
  clear(textBoxDiv);
  const textToRender = document.querySelector("input").value;
  console.log(textToRender);
  append("p", textToRender, textBoxDiv);
  textInput.value = "";
};

// HELPER FUNCITON
const append = (element, nodeContent, parent) => {
  const newElement = document.createElement(element);
  const elementContent = document.createTextNode(nodeContent);
  newElement.appendChild(elementContent);
  parent.appendChild(newElement);
};

const clear = (divID) => {
  divID.innerHTML = "";
};
