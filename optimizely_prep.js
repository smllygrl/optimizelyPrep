// Request headers

let myHeaders = new Headers({
  "User-Agent": "https://github.com/smllygrl/optimizelyPrep",
  Accept: "application/json",
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

// DAD JOKES
const dadJokeBtn = document.getElementById("dadjoke");
const dadJokeDiv = document.getElementById("dadjokeDOM");
const DADJOKE_URL = "https://icanhazdadjoke.com/";
dadJokeBtn.addEventListener("click", () => {
  console.log("Dad joke button pressed");
  accessDadJoke();
});

const accessDadJoke = async () => {
  const dadJokeRaw = await fetch(`${DADJOKE_URL}`, {
    headers: myHeaders,
  });
  const dadJokeResponse = await dadJokeRaw.json();
  const dadjokePara = document.createElement("p");
  const dadjokeText = document.createTextNode(`${dadJokeResponse.joke}`);
  dadjokePara.appendChild(dadjokeText);
  dadJokeDiv.appendChild(dadjokePara);
};

// SIMPLE TEXT
const textBtn = document.getElementById("textSubmit");
textBtn.addEventListener("click", () => {
  console.log("Text button pressed");
});
