// get elements
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const button = document.querySelector("button");

// variables
const url = "https://dummyjson.com/quotes/random";

//functions
async function getData() {
  try {
    button.textContent = "Loading...";
    button.disabled = true;
    quote.textContent = "Updating...";
    author.textContent = "Updating...";
    const data = await fetch(url);
    const response = await data.json();
    quote.textContent = response.quote;
    author.textContent = response.author;
    button.textContent = "Get a quote";
    button.disabled = false;
  } catch (err) {
    console.error(err);
    quote.textContent = "An error happened, try again later";
    author.textContent = "An error happened";
    button.textContent = "Get a quote";
    button.disabled = false;
  }
}

// event listeners
button.addEventListener("click", getData);

// init
getData();
