/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const HEARTS = "hearts";
const DIAMONDS = "diamonds";
const CLUBS = "clubs";
const SPADES = "spades";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var gameMode = "inputWildCard";

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function makeDeck() {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = [HEARTS, DIAMONDS, CLUBS, SPADES];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];
    var suitEmoji = "";

    switch (currentSuit) {
      case HEARTS:
        suitEmoji = "♥";
        break;
      case CLUBS:
        suitEmoji = "♣";
        break;
      case DIAMONDS:
        suitEmoji = "♦";
        break;
      case SPADES:
        suitEmoji = "♠";
    }

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "A";
      } else if (cardName == 11) {
        cardName = "J";
      } else if (cardName == 12) {
        cardName = "Q";
      } else if (cardName == 13) {
        cardName = "K";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        suitEmoji: suitEmoji,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
}

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

function myArrayMin(array) {
  var min = Math.min.apply(null, array);
  return array.indexOf(min);
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var wildCard;
  
  if (gameMode == "inputWildCard") {    
    var splittedInput = String(input).split(" ")
    var wildCardName = splittedInput[0];
    const cardsWithName = cardDeck.filter(card => {return card.name.includes(wildCardName)})
    wildCard = cardsWithName.find(({ suit }) => suit === splittedInput[-1])
    gameMode = "inputNumOfCards"

  }
  var cardDeck = makeDeck();
  // var wildCard = cardDeck[getRandomIndex(cardDeck.length)];
  var shuffledDeck = shuffleCards(cardDeck);

  var numOfCards = input;
  var playerHand = [];
  var playerHandRanks = [];

  for (var i = 0; i < numOfCards; i++) {
    var playerCard = shuffledDeck.pop();
    playerHand.push(playerCard);
  }

  var computerCard = shuffledDeck.pop();

  var message = "Player drew:<br>";

  for (var i = 0; i < numOfCards; i++) {
    playerHandRanks.push(playerHand[i].rank);
    message += `${playerHand[i].name} of ${playerHand[i].suitEmoji}<br>`;
  } 

  message += `The wild card is ${wildCard.name} of ${wildCard.suitEmoji}.<br>`;

  const playerQueen = playerHand.find(({ name }) => name === "Q");

  var doesPlayerHaveWild = false;
  for (var i = 0; i < numOfCards; i++) {
    if (playerHand[i] === wildCard) {
      doesPlayerHaveWild = true;
    }
  }

  if (playerQueen && computerCard.name == "Q") {
    message += `Computer drew ${computerCard.name} of ${computerCard.suitEmoji}.<br>You drew ${playerCard.name} of ${playerCard.suitEmoji}.<br>It's a draw!`;
    return message;
  }

  if (playerQueen) {
    message += `Computer drew ${computerCard.name} of ${computerCard.suitEmoji}.<br>You drew a Queen.<br>You win!`;
    return message;
  }

  if (doesPlayerHaveWild) {
    message += `Computer drew ${computerCard.name} of ${computerCard.suitEmoji}.<br>You drew the wild card.<br>You win!`;
    return message;
  }

  if (
    computerCard.rank < playerHand[myArrayMin(playerHandRanks)].rank ||
    computerCard.name == "Q" ||
    computerCard == wildCard
  ) {
    message += `Computer drew ${computerCard.name} of ${
      computerCard.suitEmoji
    }.<br>Your lowest card is ${
      playerHand[myArrayMin(playerHandRanks)].name
    } of ${
      playerHand[myArrayMin(playerHandRanks)].suitEmoji
    }.<br>Computer wins!`;
    return message;
  }

  message += `Computer drew ${computerCard.name} of ${
    computerCard.suitEmoji
  }.<br>Your lowest card is ${
    playerHand[myArrayMin(playerHandRanks)].name
  } of ${playerHand[myArrayMin(playerHandRanks)].suitEmoji}.<br>You win!`;

  return message;
}
