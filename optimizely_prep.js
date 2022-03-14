let headers = new Headers({
  "User-Agent": "",
});

// KANYE
const kanyeBtn = document.getElementById("kanye");
const kanyeDiv = document.getElementById("kanyeDOM");
const KANYE_URL = "https://api.kanye.rest";

kanyeBtn.addEventListener("click", () => {
  console.log("Kanye button pressed");
  accessKanye();
});

const accessKanye = async () => {
  const kanyeRaw = await fetch(`${KANYE_URL}`);
  const kanyeResponse = await kanyeRaw.json();
  const kanyePara = document.createElement("p");
  const kanyeText = document.createTextNode(`${kanyeResponse.quote}`);
  kanyePara.appendChild(kanyeText);
  kanyeDiv.appendChild(kanyePara);
};

// POEMS
const poemBtn = document.getElementById("poems");

poemBtn.addEventListener("click", () => {
  console.log("Poem button pressed");
});

// DAD JOKES
const dadJokeBtn = document.getElementById("dadjoke");
const dadJokeDiv = document.getElementById("dadjokeDOM");
const DADJOKE_URL = "https://icanhazdadjoke.com";
dadJokeBtn.addEventListener("click", () => {
  console.log("Dad joke button pressed");
  accessDadJoke();
});

const accessDadJoke = async () => {
  const dadJokeRaw = await fetch(DADJOKE_URL);
  console.log(dadJokeRaw);
  const dadJokeResponse = await dadJokeRaw.json();
  console.log(dadJokeResponse);
};

// SIMPLE TEXT
const textBtn = document.getElementById("textSubmit");
textBtn.addEventListener("click", () => {
  console.log("Text button pressed");
});
