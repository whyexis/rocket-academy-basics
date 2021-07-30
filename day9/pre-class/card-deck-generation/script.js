/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const HEARTS = "hearts";
const DIAMONDS = "diamonds";
const CLUBS = "clubs";
const SPADES = "spades";
const STAR = "star";

/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

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
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }
    // Add a Joker for each suit in the deck
    var joker = {
      name: "JOKER",
      suit: STAR,
      rank: "14",
    };

    cardDeck.push(joker);

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
}

function getSuitsEmoji(suit) {
  switch (suit) {
    case HEARTS:
      return "♥";
    case DIAMONDS:
      return "♦";
    case CLUBS:
      return "♣";
    case SPADES:
      return "♠";
    case STAR:
      return "🃏";
  }
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main() {
  var cardDeck = makeDeck();
  var output = "This is a regular card deck<br>";
  for (let card in cardDeck) {
    output += `${cardDeck[card].name} ${getSuitsEmoji(
      cardDeck[card].suit
    )}<br>`;
  }
  return output;
}
