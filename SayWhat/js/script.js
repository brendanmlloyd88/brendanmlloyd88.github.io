// initialize variables
var random;
var selection;
var string = "";
var colour = "";
// quotes must not be duplicated until they have all been used
// so first, initialize array of used random numbers
var usedRandomNumbers = [];
// next, initialize counter that will track when all quotes have been used
// var counter = 0;



// this function will increase counter and reset once all quotes have been used
//function trackUsed() {
//  counter += 1;
  // if all quotes have been used once, reset array of used numbers
//  if (counter === quotes.length) {
//     usedRandomNumbers.length = 0;
//     counter = 0;
//  }
//}

// this code will randomly change the background colour
// first, this function creates random values
// function rgbRandom() {
//  return Math.floor(Math.random() * 256);
// next, create string and add to html
 function colourChange() {
  colour = 'rgba(255,255,255,100)';
  document.getElementById("colour").style.backgroundColor = colour;
}


/* this function will select a random quote object from array,
  then test to see whether quote has been used,
  then return quote object */
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

// this function adds the selected quote to the page and calls colourChange
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
}

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, true);
//call printQuote every 30 seconds
window.setInterval(printQuote, 30000);
