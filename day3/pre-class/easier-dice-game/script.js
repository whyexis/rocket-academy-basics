/**
 * ------------------------------------------------------------------------
 * Helper Functions
 * ------------------------------------------------------------------------
 */

function diceRoll () {
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

  if (input <= randomDiceNumber + 2 && input >= randomDiceNumber - 2) {
    myOutputValue = `You rolled ${randomDiceNumber} and guessed ${input} which is within ±2 of the roll, you win :)`;
  }
  return myOutputValue;
}
