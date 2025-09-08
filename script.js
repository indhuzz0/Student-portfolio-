const quotes = [

  "Believe you can and you're halfway there. – Theodore Roosevelt",

  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",

  "Everything you can imagine is real. – Pablo Picasso",

  "The best way to get started is to quit talking and begin doing. – Walt Disney",

  "Do one thing every day that scares you. – Eleanor Roosevelt"

];

function generateQuote() {

  const quoteText = document.getElementById("quoteText");

  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.textContent = quotes[randomIndex];

}