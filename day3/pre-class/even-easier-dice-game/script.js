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
  var myOutputValue = `You guessed ${input}, but rolled ${randomDiceNumber}, you lose :(`;

  if (
    input == "odd" &&
    (randomDiceNumber == 1 || randomDiceNumber == 3 || randomDiceNumber == 5)
  ) {
    myOutputValue = `You guessed ${input} and rolled ${randomDiceNumber}, you win :)`;
  }

  if (
    input == "even" &&
    (randomDiceNumber == 2 || randomDiceNumber == 4 || randomDiceNumber == 6)
  ) {
    myOutputValue = `You guessed ${input} and rolled ${randomDiceNumber}, you win :)`;
  }
  return myOutputValue;
}
