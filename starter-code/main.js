/* 
console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';



if (cardOne === cardTwo {
	alert ('You found a match!');
}
else {
	alert ('Sorry, try again');
}


var gameBoardItem = document.getElementById ('game-board');

function creategameBoardItem () {
for (var i = 0; i<cards.length; i++) {
	gameBoardItem[i].className = 'card';
	var cardElement = document.createElement ('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
}
}
*/


//represents cards of the game
var cards = ['queen','queen','king','king'];

//represents the cards in play
var cardsInPlay = [];

// find the board and set it to a variable
var board = document.getElementById ('game-board');

//create a function that creates your board
function createBoard() {
	for (var i=0; i<cards.length; i++) {

//find the div of the card to display 
var cardElement = document.createElement('div');

// add stlying to the card
cardElement.className = 'card';

//set the pictured card to display in place of normal cards 
cardElement.setAttribute('data-card', cards[i]);

//add an event listener
cardElement.addEventListener('click', isTwoCards);

//add the card to the board - why does this need to be there twice?
board.appendChild(cardElement);
board.appendChild(cardElement);
}

//

}

//now we must check to see if two cards have been selected
//create a function that checks if two cards have been selected
function isTwoCards(){
//add the cards with images. What is the This attribute?
cardsInPlay.push(this.getAttribute('data-card'));
//display the image
console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') ==='king') {

	//reference an image and replace css styling in the Java script using innerHTML
	this.innerHTML = "<img src='http://www.scrapbook.com/products/cache/SBC_ink-60-00947_0.gif' alt='king' title='king'>";
}
else {
	this.innerHTML = "<img src='http://www.scrapbook.com/products/source/SBC_ink-60-00921.gif' alt='queen' title='queen'>";
}

//now check to see if player has selected two cards
if (cardsInPlay.length === 2 ) {
	isMatch(cardsInPlay);
	cardsInPlay = [];

}

}

function isMatch(cards) {

if (cards[0] === cards [1]) {
	alert ('You found a match!');
	location.reload()
} else {
	alert ('Sorry, try again');
	location.reload()
}
}

createBoard();





