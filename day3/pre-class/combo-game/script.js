/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

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

function main(input) {
  var randomDiceNumber = diceRoll();
  var myOutputValue = `You guessed ${input}, but rolled ${randomDiceNumber}, you lose :(`;

  if (input == randomDiceNumber || input == "palatable papaya") {
    myOutputValue = `You guessed ${input} and rolled ${randomDiceNumber}, you win :)`;
  }
  return myOutputValue;
}
