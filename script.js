const colors = [
  ...new Set([
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
    "#3498db",
    "#d35400",
    "#8e44ad",
    "#c0392b",
    "#1abc9c",
    "#2980b9",
    "#e74c3c",
    "#f1c40f",
    "#e67e22",
    "#95a5a6",
    "#34495e",
    "#2ecc71",
    "#e67e22",
    "#9b59b6",
    "#d35400",
    "#3498db",
    "#1abc9c",
    "#95a5a6",
    "#f1c40f",
    "#2980b9",
    "#c0392b",
  ]),
];

let jokesData = [];
let currentJokeIndex = 0;

async function getJokes() {
  jokesData = []; // Clear existing jokes
  try {
    while (jokesData.length < 40) {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      jokesData.push(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function getNextJoke() {
  if (currentJokeIndex < jokesData.length) {
    const jokeText = document.querySelector(".quote-text");
    const jokeAuthor = document.querySelector(".quote-author");

    jokeText.textContent = jokesData[currentJokeIndex].setup;
    jokeAuthor.textContent = jokesData[currentJokeIndex].punchline;

    const color = Math.floor(Math.random() * colors.length);
    document.documentElement.style.backgroundColor = colors[color];
    document.documentElement.style.color = colors[color];
    document.querySelectorAll(".button").forEach((button) => {
      button.style.backgroundColor = colors[color];
    });

    currentJokeIndex++;
  } else {
    currentJokeIndex = 0;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  await getJokes();
  getNextJoke();

  document.getElementById("new-joke").addEventListener("click", getNextJoke);
});

// Remove the animation class when animation ends
document.getElementById("quote-box").addEventListener("animationend", () => {
  document.getElementById("quote-box").classList.remove("clicked");
});
