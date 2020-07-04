var quotes = [{
  quote: " 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'",
  by: "-Benjamin Franklin"},
  {quote: "'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'",
  by: "-Helen Keller"},
  {quote: "'It is during our darkest moments that we must focus to see the light.'",
  by: "-Aristotle"},
  {quote: "'Do not go where the path may lead, go instead where there is no path and leave a trail.'",
  by: "-Ralph Waldo Emerson"},
  {quote: "'If life were predictable it would cease to be life and be without flavor.'",
  by: "-Eleanor Roosevelt"},
  {quote: "'Life is never fair, and perhaps it is a good thing for most of us that it is not.'",
  by: "-Oscar Wilde"},
  {quote: "'You only live once, but if you do it right, once is enough.'",
  by: "-Mae West"},
  {quote: "'Live in the sunshine, swim the sea, drink the wild air.'",
  by: "-Ralph Waldo Emerson"}]



var bycard = document.getElementById("bywho");
var quotecard = document.getElementById("quote");
function changequote(randomitem) {
  quotecard.innerHTML = quotes[randomitem].quote;
}
function changebywho(randomitem) {
  bycard.innerHTML = quotes[randomitem].by;
}
function change() {
  var randomitem = Math.floor(Math.random() * ((+quotes.length-1)));
  changequote(randomitem);
  changebywho(randomitem);
  console.log(bycard.innerHTML);
}
