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

var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1,
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2,
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3,
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4,
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5,
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6,
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7,
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8,
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9,
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10,
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11,
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12,
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13,
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1,
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2,
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3,
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4,
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5,
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6,
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7,
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8,
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9,
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10,
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11,
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12,
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13,
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1,
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2,
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3,
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4,
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5,
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6,
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7,
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8,
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9,
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10,
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11,
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12,
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13,
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1,
  },
  {
    name: "2",
    suit: "spades",
    rank: 2,
  },
  {
    name: "3",
    suit: "spades",
    rank: 3,
  },
  {
    name: "4",
    suit: "spades",
    rank: 4,
  },
  {
    name: "5",
    suit: "spades",
    rank: 5,
  },
  {
    name: "6",
    suit: "spades",
    rank: 6,
  },
  {
    name: "7",
    suit: "spades",
    rank: 7,
  },
  {
    name: "8",
    suit: "spades",
    rank: 8,
  },
  {
    name: "9",
    suit: "spades",
    rank: 9,
  },
  {
    name: "10",
    suit: "spades",
    rank: 10,
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11,
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12,
  },
  {
    name: "king",
    suit: "spades",
    rank: 13,
  },
];

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

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

function sortDescend(array) {
  array.sort((a, b) => b.rank - a.rank);
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
  }
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

var shuffledDeck = shuffleCards(deck);

function main(input) {
  var computerHand = [];
  var playerHand = [];

  // Each player draws 2 cards from the top of the deck
  for (var counter = 0; counter < 2; counter += 1) {
    playerHand.push(shuffledDeck.pop());
    computerHand.push(shuffledDeck.pop());
  }

  // Construct an output string to communicate which cards were drawn
  var myOutputValue = "Computer drew the following cards:<br>";
  for (var counter = 0; counter < 2; counter += 1) {
    myOutputValue += `${computerHand[counter].name} ${getSuitsEmoji(
      computerHand[counter].suit
    )}<br>`;
  }

  myOutputValue += "Player drew the following cards:<br>";
  for (var counter = 0; counter < 2; counter += 1) {
    myOutputValue += `${playerHand[counter].name} ${getSuitsEmoji(
      playerHand[counter].suit
    )}<br>`;
  }

  // Sort computer and player cards by rank attribute
  sortDescend(computerHand);
  sortDescend(playerHand);
  // If computer card rank is greater than player card rank, computer wins
  if (computerHand[0].rank > playerHand[0].rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerHand[0].rank < playerHand[0].rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
}
