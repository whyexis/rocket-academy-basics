/**
 * ------------------------------------------------------------------------
 * Global Variables
 * ------------------------------------------------------------------------
 */

var withinNumber = generateWithinNumber();

/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function generateWithinNumber() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
}

var diceRoll = function () {
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

var main = function (input) {
  var randomDiceNumber = diceRoll();
  var myOutputValue = `You guessed ${input} but it is not within +- ${withinNumber} of your roll ${randomDiceNumber}, you lose :(`;

  if (
    input <= randomDiceNumber + withinNumber &&
    input >= randomDiceNumber - withinNumber
  ) {
    myOutputValue = `You rolled ${randomDiceNumber} and guessed ${input} which is within +-${withinNumber} of the roll, you win :)`;
    withinNumber = generateWithinNumber();
  }
  return myOutputValue;
};
