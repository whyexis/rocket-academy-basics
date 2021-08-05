/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const HEARTS = "hearts";
const DIAMONDS = "diamonds";
const CLUBS = "clubs";
const SPADES = "spades";
const PLAYER_1 = "Player 1️⃣";
const PLAYER_2 = "Player 2️⃣";

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

    var rankCounter = 2;
    while (rankCounter <= 14) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var suitEmoji;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 14) {
        cardName = "A";
      } else if (cardName == 11) {
        cardName = "J";
      } else if (cardName == 12) {
        cardName = "Q";
      } else if (cardName == 13) {
        cardName = "K";
      }

      switch (currentSuit) {
        case HEARTS:
          suitEmoji = "♥";
          break;
        case DIAMONDS:
          suitEmoji = "♦";
          break;
        case CLUBS:
          suitEmoji = "♣";
          break;
        case SPADES:
          suitEmoji = "♠";
          break;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        emoji: suitEmoji,
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

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var output = "Hello World";
  return output;
}

/* Pseudocode
Create a deck with 52 cards
Card rank (highest first)	A K Q J 10 9 8 7 6 5 4 3 2

Shuffle the deck

Split the deck into two, half for each player

Battle: each player reveals the top card of their deck
Player with higher card takes both cards and moves them to the bottom of the stack.

Two cards are equal value, war
Both players place the next three cards face down and then another card face-up.
The owner of the higher face-up card wins the war and adds all the cards on the table to the bottom of their deck.

Gameplay continues until one player wins all the cards, or
one player has no more cards in the stack during a war.

Return output message for each round and end game result.
*/
