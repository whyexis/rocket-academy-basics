/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const HEARTS = "hearts";
const DIAMONDS = "diamonds";
const CLUBS = "clubs";
const SPADES = "spades";
const PLAYER_1 = "Player 1";
const PLAYER_2 = "Player 2";
const COLOUR_1 = "#1357BE";
const COLOUR_2 = "#68221F";

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

function generateRoundResults(roundCount, winner, loser, winCard, lossCard) {
  var colour = COLOUR_1;
  if (winner == PLAYER_2) {
    colour = COLOUR_2;
  }
  return `<div style="border-radius:5px; background-color:${colour}; padding: 0.25em 2em;"><b><u>Round ${roundCount}</u></b></div><br>${winner} drew ${winCard.name} ${winCard.emoji} and ${loser} drew ${lossCard.name} ${lossCard.emoji}.<br>${winner} wins this round!<br><br>`;
}

function generateWarResults(
  roundCount,
  winner,
  loser,
  winCard,
  lossCard,
  numOfCards
) {
  var colour = COLOUR_1;
  if (winner == PLAYER_2) {
    colour = COLOUR_2;
  }
  return `<div style="border-radius:5px; background-color:${colour}; padding: 0.25em 2em;"><b><u>Round ${roundCount}</u></b></div><br>There is a WAR!.<br>${winner} drew ${winCard.name} ${winCard.emoji} and ${loser} drew ${lossCard.name} ${lossCard.emoji}.<br>${winner} wins this round and ${numOfCards} cards in total!<br><br>`;
}

function playGame(stack1, stack2) {
  var output = `<b><u>Legend</u></b><br><br><div style="border-radius:5px; background-color:${COLOUR_1}; padding: 0.25em 2em;"><b>Player 1 won.<b></div><br><div style="border-radius:5px; background-color:${COLOUR_2}; padding: 0.25em 2em;"><b>Player 2 won.</b></div><br><br>`;
  var roundCounter = 1;
  while (stack1.length != 0 && stack2.length != 0) {
    // Battle
    var card1 = stack1.pop();
    var card2 = stack2.pop();

    if (card1.rank > card2.rank) {
      stack1.unshift(card1, card2);
      output += generateRoundResults(
        roundCounter,
        PLAYER_1,
        PLAYER_2,
        card1,
        card2
      );
    } else if (card2.rank > card1.rank) {
      stack2.unshift(card2, card1);
      output += generateRoundResults(
        roundCounter,
        PLAYER_2,
        PLAYER_1,
        card2,
        card1
      );
    } else {
      // War when there is a draw
      var warArray = [card1, card2];
      var areCardsEqual = true;

      while (areCardsEqual && stack1.length >= 4 && stack2.length >= 4) {
        for (var warCounter = 0; warCounter < 3; warCounter += 1) {
          warArray.push(stack1.pop());
          warArray.push(stack2.pop());
        }

        var warCard1 = stack1.pop();
        var warCard2 = stack2.pop();

        if (warCard1.rank > warCard2.rank) {
          areCardsEqual = false;
          warArray.push(warCard1, warCard2);
          warArray.forEach((element) => stack1.unshift(element));
          output += generateWarResults(
            roundCounter,
            PLAYER_1,
            PLAYER_2,
            warCard1,
            warCard2,
            warArray.length
          );
        } else if (warCard2.rank > warCard1.rank) {
          areCardsEqual = false;
          warArray.push(warCard1, warCard2);
          warArray.forEach((element) => stack2.unshift(element));
          output += generateWarResults(
            roundCounter,
            PLAYER_2,
            PLAYER_1,
            warCard2,
            warCard1,
            warArray.length
          );
        }
      }
      if (areCardsEqual) {
        break;
      }
    }
    roundCounter += 1;
  }
  console.log("stack 1", stack1);
  console.log("stack 2", stack2);

  var winner = PLAYER_1;
  if (stack1.length < stack2.length) {
    winner = PLAYER_2;
  }

  var summary = `👑 After ${roundCounter} exciting rounds, ${winner} is the ultimate winner! 👑<br><br>`;
  output = summary + output;

  return output;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main() {
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);

  player1Stack = shuffledDeck.splice(0, 26);
  player2Stack = shuffledDeck.splice(0);

  return playGame(player1Stack, player2Stack);
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
