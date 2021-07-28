/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

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

function diceRoll() {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
}

/**
 * ------------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------------
 */
function main(input) {
  var randomDiceNumber = diceRoll();
  var output = `You guessed ${input}, but rolled ${randomDiceNumber}, you lose :(`;

  if (input == randomDiceNumber) {
    output = `You guessed ${input} and rolled ${randomDiceNumber}, you win :)`;
  }
  return output;
}
