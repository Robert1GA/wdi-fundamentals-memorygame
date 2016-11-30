console.log("JS file is connected to HTML! Woo!")
var cardOne="queen";
var cardTwo="king";
var cardThree="king";
var cardFour="queen";
/* if (cardOne===cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */
  
var gameBoard = document.getElementById("game-board");

var createCards = function() {
  for (var x=0; x<4; x++) {
    var newCard = document.createElement('div');
    newCard.className = "card";
    gameBoard.appendChild(newCard);
  }
}

createCards();

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var createBoard = function() {
  for (var i=0; i<cards.length; i++) {
    newCard.setAttribute('data-card', cards[i]);
  }
}



for (var i=0; i<cards.length; i++) {
      cardElement.addEventListener('click', isTwoCards)
}

/*

function isTwoCards() { 
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
  isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

*/