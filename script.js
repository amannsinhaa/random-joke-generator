const colors = [
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
];

const jokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
  },
  {
    setup:
      "Did you hear about the mathematician who's afraid of negative numbers?",
    punchline: "He'll stop at nothing to avoid them!",
  },
  {
    setup: "Parallel lines have so much in common...",
    punchline: "It's a shame they'll never meet.",
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
  },
  {
    setup: "I told my wife she was drawing her eyebrows too high...",
    punchline: "She looked surprised!",
  },
  {
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
  },
  {
    setup: "How do you organize a space party?",
    punchline: "You planet!",
  },
  {
    setup: "Why was the math book sad?",
    punchline: "Because it had too many problems.",
  },
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
  },
  {
    setup: "What did the zero say to the eight?",
    punchline: "Nice belt!",
  },
  {
    setup: "Why did the golfer bring two pairs of pants?",
    punchline: "In case he got a hole in one!",
  },
  {
    setup: "What do you call a fish with no eyes?",
    punchline: "Fsh!",
  },
  {
    setup: "I told my wife she was drawing her eyebrows too high...",
    punchline: "She looked surprised!",
  },
  {
    setup: "How do you make a tissue dance?",
    punchline: "You put a little boogie in it!",
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
  },
  {
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts!",
  },
  {
    setup: "What did one wall say to the other wall?",
    punchline: "I'll meet you at the corner!",
  },
  {
    setup: "Why couldn't the bicycle stand up by itself?",
    punchline: "It was two-tired!",
  },
  {
    setup: "I'm reading a book on anti-gravity...",
    punchline: "It's impossible to put down!",
  },
  {
    setup: "Parallel lines have so much in common...",
    punchline: "It's a shame they'll never meet.",
  },
];

let currentJokeIndex = -1;

function getRandomJoke() {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  // Ensure the same joke is not repeated consecutively
  if (randomNumber === currentJokeIndex) {
    return getRandomJoke();
  }
  currentJokeIndex = randomNumber;
  return jokes[randomNumber];
}

function displayJoke(joke) {
  const jokeText = document.querySelector(".quote-text");
  const jokeAuthor = document.querySelector(".quote-author");

  jokeText.style.opacity = 0;
  jokeAuthor.style.opacity = 0;

  setTimeout(() => {
    jokeText.style.opacity = 1;
    jokeAuthor.style.opacity = 1;
    document.getElementById("text").textContent = joke.setup;
    document.getElementById("author").textContent = joke.punchline;
  }, 500);

  const color = Math.floor(Math.random() * colors.length);
  document.documentElement.style.backgroundColor = colors[color];
  document.documentElement.style.color = colors[color];
  document.querySelectorAll(".button").forEach((button) => {
    button.style.backgroundColor = colors[color];
  });
}

setTimeout(() => {
  jokeText.style.opacity = 1;
  jokeAuthor.style.opacity = 1;
  document.getElementById("text").textContent = joke.setup;
  document.getElementById("author").textContent = joke.punchline;
}, 500); // Adjust the delay as needed

document.addEventListener("DOMContentLoaded", function () {
  // Initial display of a joke
  const initialJoke = getRandomJoke();
  displayJoke(initialJoke);

  document.getElementById("new-joke").addEventListener("click", function () {
    const randomJoke = getRandomJoke();
    displayJoke(randomJoke);
  });

  // Remove the animation class when animation ends
  document.getElementById("quote-box").addEventListener("animationend", () => {
    document.getElementById("quote-box").classList.remove("clicked");
  });
});
