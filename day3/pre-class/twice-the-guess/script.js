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
  var guess = input * 2;
  var myOutputValue = `You guessed ${input}, but rolled ${randomDiceNumber}, you lose :(`;

  if (guess == randomDiceNumber) {
    myOutputValue = `You guessed ${input} and rolled ${randomDiceNumber}, you win :)`;
  }
  return myOutputValue;
}
