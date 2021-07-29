/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var lastRoll = 0;

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */

function main(input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = `Your last roll was ${lastRoll}. You guessed ${input} and just rolled a ${randomDiceNumber}. You lose.`;

  if (randomDiceNumber == input) {
    myOutputValue = `Your last roll was ${lastRoll}. You guessed ${input} and just rolled a ${randomDiceNumber}. You win!`;
  }
  lastRoll = randomDiceNumber;

  return myOutputValue;
}
